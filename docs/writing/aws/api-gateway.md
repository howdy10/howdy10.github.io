---
sidebar_position: 2
---

# API gateway and integrations using CDK

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

## Lambda integration

```js title="Initializing a lambda integration"
new LambdaIntegration(handler: IFunction, options?: LambdaIntegrationOptions)
```

Notable [LambdaIntegrationsOptions](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_apigateway.LambdaIntegrationOptions.html)

### Proxy

This field is by default true. This will directly pass the incoming request from the client to the lambda. The lambda will need to return the appropriate JSON output. This will pass a APIGatewayProxy event to your lambda and expect a APIGatewayProxyResult back.

If you turn this off this will no longer pass a APIGatewayEvent type to your lambda it will pass the request template you specify.

### Request Templates

This lets you manipulate the incoming message before it reaches the lambda. This uses VTL. Proxy has to be set to false to use this. You can choose different mappings for each Content-Type.

There is multiple variables you can access which you can see [here](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html)

```js
'application/x-www-form-urlencoded': JSON.stringify({body: '$input.body'})
'application/json': JSON.stringify({name: 'something Static'})
```

### Integration Response

This lets you manipulate the response message from the lambda to the api gateway. Proxy has to be set to false to use this. This can be used for static response.

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

## SQS integration

```js title="Initializing a Queue integration"
new AwsIntegration(props: AwsIntegrationProps);
new AwsIntegration({ service: 'sqs', path: 'queueName', ...props });
```

Notable [AwsIntegrationProps](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_apigateway.AwsIntegrationProps.html)

### Options

[IntegrationOptions](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_apigateway.IntegrationOptions.html)

credentialsRole: An IAM role that API Gateway assumes. This roles needs access to publish to queue
requestTemplates
integrationResponses
