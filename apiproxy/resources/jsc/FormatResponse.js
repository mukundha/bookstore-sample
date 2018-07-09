var response = JSON.parse(context.getVariable("response.content"));
var keys = Object.keys(response);
var returnObj = response[keys[0]]["return"]
if(returnObj) {
    if(returnObj instanceof Array) {
        context.setVariable("response.content", JSON.stringify(returnObj));
    } else {
        context.setVariable("response.content", JSON.stringify([returnObj]));
    }
} else if (response[keys[0]] == "NULL"){
    context.setVariable("response.content", JSON.stringify({}));
}
