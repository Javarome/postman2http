"use strict"
const fs = require("fs")

const fileName = "test/Custodial Gateway.postman_collection.json"
const postmanReqJson = fs.readFileSync(fileName)
const postmanReq = JSON.parse(postmanReqJson)
let httpReq = ""
const items = postmanReq.item
for (const item of items) {
  let reqName = item.name
  if (reqName) {
    httpReq += `### ${reqName}
`
  }
  const request = item.request
  httpReq += `${request.method} ${request.url.raw}
`
  const headers = request.header
  for (const header of headers) {
    httpReq += `${header.key}: ${header.value}
`
  }
  let body = request.body
  if (body) {
    httpReq += `
${body.raw}

`
  }
}
console.log(httpReq)
