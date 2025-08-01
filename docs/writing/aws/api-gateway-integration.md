---
sidebar_position: 3
---

# API Gateway Endpoint Integrations with CDK

This is for aws-apigateway REST APIs. NOT aws-apigatewayv2 HTTP APIs.

There is a lot of steps when setting up a API gateway, this page will only focus on adding endpoints and connecting them to a resource.

When creating a method you follow this convention [addMethod](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_apigateway.IResource.html#addwbrmethodhttpmethod-target-options)

```js
const apiResource = restApi.root.resourceForPath(path: string)
apiResource.addMethod(httpMethod: string, target?: Integration, options?: MethodOptions)
//OR
const apiResource = restApi.root.addResource(path: string)
apiResource.addMethod(httpMethod: string, target?: Integration, options?: MethodOptions)
```

## Configuration

There is different type of integrations you can set but they all a few things in common

### Integration Request

This section is used to map the incoming request into anything your aws resource might need. You can set Path parameters, query string parameters, headers. Map them from a value using the format `method.request.<location>.<name>`.

For POST endpoints there is extra set up on passing the body through. You can set up [Mapping Templates](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_apigateway.IntegrationOptions.html#requesttemplates) for the different [Body Passthrough](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_apigateway.PassthroughBehavior.html).

Mapping Templates follow the pattern `{"<Content-type>": "<Mapping>"}`. Mapping uses VTL language and can learn more [here](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html)

```js
'application/x-www-form-urlencoded': JSON.stringify({body: '$input.body'})
'application/json': JSON.stringify({name: 'something Static'})
```

The different body Passthrough behaviors are:

- Never: never pass body as is, this requires you to have Mapping templates set for all content-types
- When no matching template: if you get a request and you don't have a mapping template for that content-type just pass the body as is
- When no templates are set: Only pass the body as is if you have no templates set at all

You can also set the Credential role for apigateway to be able to post to the integration.

### Integration Response

This section is used to map the response from a aws resource into a http response. ⚠️ You must have the status code set up in method responses.

When setting up a [Integration Response](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_apigateway.IntegrationResponse.html) You NEED to set a status code.

You then have different method to set a response. The simplest is setting [Content Handling](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_apigateway.ContentHandling.html) to `Convert to text` which would just send the whole response object. You can also set [Response Templates](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_apigateway.IntegrationResponse.html#responsetemplates) follow the pattern `{"<Content-type>": "<Mapping>"}` using [VTL](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html)

```js
{
  statusCode: 'statusCode',

  // the properties below are optional
  contentHandling: apigateway.ContentHandling.[something],
  responseParameters: {
    responseParametersKey: 'responseParameters',
  },
  responseTemplates: {
    responseTemplatesKey: 'responseTemplates',
  },
  selectionPattern: 'selectionPattern',
}
```

## Lambda integration

```js title="Initializing a lambda integration"
new LambdaIntegration(handler: IFunction, options?: LambdaIntegrationOptions)
```

Notable [LambdaIntegrationsOptions](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_apigateway.LambdaIntegrationOptions.html)

### Proxy

This field is by default true. This will directly pass the incoming body request from the method request to the lambda. The lambda will need to return an appropriate JSON output. This will pass a APIGatewayProxy event to your lambda and expect a APIGatewayProxyResult back.

If you turn this off this will no longer pass a APIGatewayEvent type to your lambda it will need to set a Integration request Request Template to map what the lambda will receive. You will also need to set a Integration Response to map a apigateway response.

## SQS integration

There is not a built in SQS integration so needs to be done via [AwsIntegration](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_apigateway.AwsIntegration.html) and uses [AwsIntegrationProps](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_apigateway.AwsIntegrationProps.html)

```js title="Initializing a Queue integration"
new AwsIntegration(props: AwsIntegrationProps);
new AwsIntegration({ service: 'sqs', path: '<awsAccountId>/<queueName>', ...integrationOptions });
```

Setting required via [IntegrationOptions](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_apigateway.IntegrationOptions.html) are:

- CredentialsRole: needs sendMessage Permission to the queue
- RequestTemplate: this should map to a sendMessage Action `Action=SendMEssage&MessageBody={}`
- IntegrationResponse: The mapping you would like the client to receive

SQS Queue Integration expects Content-Type to be `applications/x-www-form-urlencoded`. If your calls will not be that then you need to make sure you change the header in your IntegrationOptions in RequestParameters. [Example](https://serverlessland.com/patterns/apigw-sqs-sam)
