
// DynamoDB Connect
const { DynamoDBClient, ListTablesCommand } = require("@aws-sdk/client-dynamodb")

// Back User Hello
exports.signup = function (req, res) {
  console.log('admin > user > signup')
  console.log(req.body)
  if (req.body.user && req.body.user.email && req.body.user.password1 && req.body.user.password2 && (req.body.user.password1 === req.body.user.password2)) {
    console.log(1)
    const user = req.body.user
  }
  res.status(400).send({ codeError: 'error.admin.user.signup.badParameters' })

  /*const client = new DynamoDBClient({ region: "eu-west-3" })
  const command = new ListTablesCommand({})
  const results = await client.send(command)
  res.send({ 'tables': results.TableNames.join("\n") })*/

  //
  /*try {
    res.send({ user })
    console.log(results.TableNames.join("\n"))
  } catch (err) {
    console.error(err)
    res.send({ user })
  }*/

}
