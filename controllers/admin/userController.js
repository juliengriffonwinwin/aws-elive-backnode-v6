
const { DynamoDBClient, ListTablesCommand } = require("@aws-sdk/client-dynamodb")
const { Credentials } = require("@aws-sdk/types")
const { defaultProvider } = require("@aws-sdk/credential-provider-node")
const { AssumeRoleParams } = require("@aws-sdk/credential-provider-ini")
const { STS } = require("@aws-sdk/client-sts")

// Back User Hello
exports.hello = async function (req, res) {
  console.log('admin > user > hello')

  const user = { email: '1 test@test.com' }

  const client = new DynamoDBClient({ region: "eu-west-3" })
  const command = new ListTablesCommand({})
  const results = await client.send(command)

  res.send({ 'tables': results.TableNames.join("\n") })

  //
  /*try {
    res.send({ user })
    console.log(results.TableNames.join("\n"))
  } catch (err) {
    console.error(err)
    res.send({ user })
  }*/

}
