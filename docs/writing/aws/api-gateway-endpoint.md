---
sidebar_position: 2
---

# API Gateway Endpoint with CDK

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

These settings are configured through [MethodOptions](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_apigateway.MethodOptions.html) and do not reflect anyway how an HTTP call will interact with the resource integration.

### Method Request

#### AuthorizationType

This can be set here such as API Key, IAM, CUSTOM (lambda), Cognito, of None.

- Api key can be used on top of the other authorizer, and requires API keys and Usage Plans
- Custom type also requires a authorizer to be set such as the lambda being used.
- Cognito required Authorization Scoped, which are the scopes in the access token. More info [here](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-method.html#cfn-apigateway-method-authorizationscopes)

#### Expected input

You can also set expected requestParameters. This is a string, boolean mapping representing location and if it's required. Format: `method.request.<location>.<name>`
Location options are:

- querystring
- path
- header

You can also create expected models and set them as requestModels. But that's a whole other resource. They are created through [apigetway.RestApi.AddModel()](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_apigateway.RestApi.html#addwbrmodelid-props) and are built with [ModelOptions](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_apigateway.ModelOptions.html)

#### Input validations

[RequestValidator](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_apigateway.RequestValidator.html) or [RequestValidatorOptions](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_apigateway.RequestValidatorOptions.html) is another resource that is used with requestParameters and requestModels to do validation on them. Difference is you either create a resource to reuse or just pass in the options to create it once.
There two bool options are:

- validateRequestBody
- validateRequestParameters

### Method Response

The only field here is [methodResponses](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_apigateway.MethodResponse.html). Which is a list of [MethodResponse](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_apigateway.MethodResponse.html). You can set what status codes, along with what models and parameters will be returned (Something can get passed from the integration or have a static result). This is required when you don't have Lambda proxy integration.
