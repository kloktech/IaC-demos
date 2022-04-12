import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { AwsProvider, s3 } from "@cdktf/provider-aws";

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    // define resources here
    new AwsProvider(this, "AWS", {
      region: "us-west-2",
    });		
   
    new s3.S3Bucket(this, "bucket", {
      bucket: "cdktf-test-bucket",
    });

  }
}

const app = new App();
new MyStack(app, "cdktf");
app.synth();
