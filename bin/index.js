#!/usr/bin/node

import fs from "fs"

const fileName = process.argv[2]
const postmanReqJson = fs.readFileSync(fileName, "utf-8")
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
