
const { DynamoDBClient, ListTablesCommand } = require("@aws-sdk/client-dynamodb")

// Back User Hello
exports.hello = async function (req, res) {
  console.log('admin > user > hello')
  const user = { email: 'test@test.com' }

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
