<template>
  <div>
    <div class="wrap" v-if="flag">
      <div class="hed">
        <img :src="list.banner" alt="" />
        <div class="typs">
          <span
            ><router-link to="/dingzhi/siren" active-class="a">
              <span class="sp1">私人定制</span>
            </router-link></span
          >
          <span
            ><router-link to="/dingzhi/qiye" active-class="a">
              <span class="sp1"> 企业定制</span>
            </router-link></span
          >
        </div>
      </div>
      <div class="biaodan">
        <div class="sumbits">
          <ul>
            <li>
              <span>目的地(必选)</span>
              <span><van-icon name="arrow-down" /></span>
            </li>
            <li>
              <span>预计出游时间(必选)</span>
              <span><van-icon name="arrow-down" /></span>
            </li>
            <li>
              <span>预计出游人数(必选)</span>
              <span><van-icon name="arrow-down" /></span>
            </li>
            <li>
              <span>预计人均预算(如暂不明确可不填写)</span>
              <span><van-icon name="arrow-down" /></span>
            </li>
            <li>
              <span>出行目的(必选)</span>
              <span><van-icon name="arrow-down" /></span>
            </li>
            <li>
              <span>您的名字(非必选)</span>
              <span><van-icon name="arrow-down" /></span>
            </li>
            <li>
              <span>您的公司名称(必选)</span>
              <span><van-icon name="arrow-down" /></span>
            </li>
          </ul>
          <button>免费获取出行方案</button>
        </div>
        <div class="fls">
          <span>
            <img
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTJweCIgaGVpZ2h0PSIxMnB4IiB2aWV3Qm94PSIwIDAgMTIgMTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU5LjEgKDg2MTQ0KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5pY25fMVYxPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9Ik1PQl8xLjAtaG9tZXBhZ2UiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLnp4HkurrlrprliLZNT0IiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zOC4wMDAwMDAsIC0zNjAuMDAwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGcgaWQ9IuengeS6uuiuouWItiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTguMDAwMDAwLCAxMjguMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i6KGo5Y2VIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgNTIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC00IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOC4wMDAwMDAsIDE3OS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Imljbl8xVjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuMDAwMDAwLCAxLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hCIgb3BhY2l0eT0iMCIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IuefqeW9oiIgeD0iMCIgeT0iMCIgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNiwxMS40OTk5OTM1IEM1Ljg1MjcxODczLDExLjUwMDE1ODIgNS43MTMxNzc5MiwxMS40MzQwNiA1LjYyLDExLjMyIEwwLjYyLDUuMzIgQzAuNTEzODM5NjYyLDUuMTk5OTY5OTkgMC40NzYxNDczNjIsNS4wMzQxMjM4NyAwLjUyLDQuODggTDEuNTIsMC44OCBDMS41NzE0NDU3NSwwLjY1NjY2ODA0MSAxLjc3MDgyMjIyLDAuNDk4ODI4MzM5IDIsMC40OTk5OTM1MiBMMTAsMC40OTk5OTM1MiBDMTAuMjI5MTc3OCwwLjQ5ODgyODMzOSAxMC40Mjg1NTQyLDAuNjU2NjY4MDQxIDEwLjQ4LDAuODggTDExLjQ4LDQuODggQzExLjUyMzg1MjYsNS4wMzQxMjM4NyAxMS40ODYxNjAzLDUuMTk5OTY5OTkgMTEuMzgsNS4zMiBMNi4zOCwxMS4zMiBDNi4yODY4MjIwOCwxMS40MzQwNiA2LjE0NzI4MTI3LDExLjUwMDE1ODIgNiwxMS40OTk5OTM1IFogTTEuNTUsNC44OCBMNiwxMC4yMiBMMTAuNDUsNC44OCBMOS42MSwxLjUgTDIuMzksMS41IEwxLjU1LDQuODggWiIgaWQ9IuW9oueKtiIgZmlsbD0iIzg5ODk4OSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTYsNy41MDAwMDAyOCBDNS44NTI3MTg3Myw3LjUwMDE1ODI0IDUuNzEzMTc3OTIsNy40MzQwNTk5NiA1LjYyLDcuMzIgTDMuMTIsNC4zMiBDMi45NzkyODAxNSw0LjEwODIzNzQ1IDMuMDE5ODg3NjgsMy44MjQ1ODg4NSAzLjIxNDM2OTk1LDMuNjYwODE0MzEgQzMuNDA4ODUyMjIsMy40OTcwMzk3NyAzLjY5NTI3MzgzLDMuNTA1Mjk1NCAzLjg4LDMuNjggTDYsNi4yMiBMOC4xMiwzLjY4IEM4LjMwNDcyNjE3LDMuNTA1Mjk1NCA4LjU5MTE0Nzc4LDMuNDk3MDM5NzcgOC43ODU2MzAwNSwzLjY2MDgxNDMxIEM4Ljk4MDExMjMyLDMuODI0NTg4ODUgOS4wMjA3MTk4NSw0LjEwODIzNzQ1IDguODgsNC4zMiBMNi4zOCw3LjMyIEM2LjI4NjgyMjA4LDcuNDM0MDU5OTYgNi4xNDcyODEyNyw3LjUwMDE1ODI0IDYsNy41MDAwMDAyOCBMNiw3LjUwMDAwMDI4IFoiIGlkPSLot6/lvoQiIGZpbGw9IiM4OTg5ODkiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
              alt=""
            />
            1v1专属定制
          </span>
          <span>
            <img
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSIxMHB4IiB2aWV3Qm94PSIwIDAgMTAgMTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU5LjEgKDg2MTQ0KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5pY25fMmg8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iTU9CXzEuMC1ob21lcGFnZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuengeS6uuWumuWItk1PQiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE0My4wMDAwMDAsIC0zNjEuMDAwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGcgaWQ9IuengeS6uuiuouWItiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTguMDAwMDAwLCAxMjguMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i6KGo5Y2VIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgNTIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC005aSH5Lu9IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjEuMDAwMDAwLCAxNzkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJpY25fMmgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMuMDAwMDAwLCAxLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hCIgb3BhY2l0eT0iMCIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IuefqeW9oiIgeD0iMCIgeT0iMCIgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMS41Miw0LjQ0IEw1Ljc3LDYuNjggQzUuOTEyODU2MDgsNi43NjAxNjI2MyA2LjA4NzE0MzkyLDYuNzYwMTYyNjMgNi4yMyw2LjY4IEwxMC40OCw0LjQ0IEMxMC42NDE3MTE2LDQuMzUyNzE3MzMgMTAuNzQyNTEzMiw0LjE4Mzc2MzE4IDEwLjc0MjUxMzIsNCBDMTAuNzQyNTEzMiwzLjgxNjIzNjgyIDEwLjY0MTcxMTYsMy42NDcyODI2NyAxMC40OCwzLjU2IEw2LjIzLDEuMzIgQzYuMDg3MTQzOTIsMS4yMzk4MzczNyA1LjkxMjg1NjA4LDEuMjM5ODM3MzcgNS43NywxLjMyIEwxLjUyLDMuNTYgQzEuMzU4Mjg4NCwzLjY0NzI4MjY3IDEuMjU3NDg2ODQsMy44MTYyMzY4MiAxLjI1NzQ4Njg0LDQgQzEuMjU3NDg2ODQsNC4xODM3NjMxOCAxLjM1ODI4ODQsNC4zNTI3MTczMyAxLjUyLDQuNDQgWiBNNiwyLjMyIEw5LjE3LDQgTDYsNS42OCBMMi44Myw0IEw2LDIuMzIgWiIgaWQ9IuW9oueKtiIgZmlsbD0iIzg5ODk4OSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEwLDUuNTYgTDYsNy42OCBMMiw1LjU2IEMxLjg4MzY0OTM0LDUuNDk3MTkxNzIgMS43NDY4NTQwNSw1LjQ4NDA3MDA2IDEuNjIwNjg1NDQsNS41MjM2MTU0NCBDMS40OTQ1MTY4Myw1LjU2MzE2MDgzIDEuMzg5Njg0NTcsNS42NTIwMTY1IDEuMzMsNS43NyBDMS4yNjY0NTQyMSw1Ljg4NTEyMTA5IDEuMjUxODQ1MSw2LjAyMDk1MjAzIDEuMjg5NDU3MzQsNi4xNDY5NTMwMyBDMS4zMjcwNjk1Nyw2LjI3Mjk1NDA0IDEuNDEzNzQ2NTIsNi4zNzg1NTAzNCAxLjUzLDYuNDQgTDUuNzcsOC42OCBDNS45MTI4NTYwOCw4Ljc2MDE2MjYzIDYuMDg3MTQzOTIsOC43NjAxNjI2MyA2LjIzLDguNjggTDEwLjQ4LDYuNDQgQzEwLjU5NjI1MzUsNi4zNzg1NTAzNCAxMC42ODI5MzA0LDYuMjcyOTU0MDQgMTAuNzIwNTQyNyw2LjE0Njk1MzAzIEMxMC43NTgxNTQ5LDYuMDIwOTUyMDMgMTAuNzQzNTQ1OCw1Ljg4NTEyMTA5IDEwLjY4LDUuNzcgQzEwLjYyMDQyMyw1LjY0OTI4Njg1IDEwLjUxMzgwODIsNS41NTg0MDAyMyAxMC4zODUxODczLDUuNTE4Njc5MDkgQzEwLjI1NjU2NjUsNS40Nzg5NTc5NSAxMC4xMTcyNjksNS40OTM5MDEwNyAxMCw1LjU2IEwxMCw1LjU2IFoiIGlkPSLot6/lvoQiIGZpbGw9IiM4OTg5ODkiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMCw3LjU2IEw2LDkuNjggTDIsNy41NiBDMS44ODM2NDkzNCw3LjQ5NzE5MTcyIDEuNzQ2ODU0MDUsNy40ODQwNzAwNiAxLjYyMDY4NTQ0LDcuNTIzNjE1NDQgQzEuNDk0NTE2ODMsNy41NjMxNjA4MyAxLjM4OTY4NDU3LDcuNjUyMDE2NSAxLjMzLDcuNzcgQzEuMjY2NDU0MjEsNy44ODUxMjEwOSAxLjI1MTg0NTEsOC4wMjA5NTIwMyAxLjI4OTQ1NzM0LDguMTQ2OTUzMDMgQzEuMzI3MDY5NTcsOC4yNzI5NTQwNCAxLjQxMzc0NjUyLDguMzc4NTUwMzQgMS41Myw4LjQ0IEw1Ljc4LDEwLjY4IEM1LjkyMjg1NjA4LDEwLjc2MDE2MjYgNi4wOTcxNDM5MiwxMC43NjAxNjI2IDYuMjQsMTAuNjggTDEwLjQ5LDguNDQgQzEwLjYwNjI1MzUsOC4zNzg1NTAzNCAxMC42OTI5MzA0LDguMjcyOTU0MDQgMTAuNzMwNTQyNyw4LjE0Njk1MzAzIEMxMC43NjgxNTQ5LDguMDIwOTUyMDMgMTAuNzUzNTQ1OCw3Ljg4NTEyMTA5IDEwLjY5LDcuNzcgQzEwLjYzMDYwMjMsNy42NDY0ODkxNSAxMC41MjIxOTMxLDcuNTUzNDk4NzYgMTAuMzkxMDc5OSw3LjUxMzU5NDczIEMxMC4yNTk5NjY2LDcuNDczNjkwNyAxMC4xMTgxMzM5LDcuNDkwNTIwNDggMTAsNy41NiBaIiBpZD0i6Lev5b6EIiBmaWxsPSIjODk4OTg5Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="
              alt=""
            />
            2小时极速方案
          </span>
          <span>
            <img
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTJweCIgaGVpZ2h0PSIxMHB4IiB2aWV3Qm94PSIwIDAgMTIgMTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU5LjEgKDg2MTQ0KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5pY25fNyoyNDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJNT0JfMS4wLWhvbWVwYWdlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i56eB5Lq65a6a5Yi2TU9CIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjU0LjAwMDAwMCwgLTM2MS4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8ZyBpZD0i56eB5Lq66K6i5Yi2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOC4wMDAwMDAsIDEyOC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSLooajljZUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCA1Mi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0i57yW57uELTTlpIfku70tMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjM1LjAwMDAwMCwgMTc5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iaWNuXzcqMjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuMDAwMDAwLCAxLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hCIgb3BhY2l0eT0iMCIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IuefqeW9oiIgeD0iMCIgeT0iMCIgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTAuMjQsMi4zIEM5LjA1NjI4ODQsMS4xNjQ0OTQ4IDcuMTg5MDU0NTYsMS4xNjAwOTA5NSA2LDIuMjkgQzQuODI2Mzk0OSwxLjExOTE1NjM2IDIuOTI1ODQzNjksMS4xMjEzOTQ5NSAxLjc1NTAwMDAzLDIuMjk1MDAwMDMgQzAuNTg0MTU2Mzc0LDMuNDY4NjA1MTEgMC41ODYzOTQ5MzYsNS4zNjkxNTYzMyAxLjc2LDYuNTQgTDUuNjUsMTAuNDMgQzUuNzQwNzMzMzMsMTAuNTI2Njc3MiA1Ljg2NzQxNDA5LDEwLjU4MTUxODYgNiwxMC41ODE1MTg2IEM2LjEzMjU4NTkxLDEwLjU4MTUxODYgNi4yNTkyNjY2NywxMC41MjY2NzcyIDYuMzUsMTAuNDMgTDEwLjI0LDYuNTQgQzExLjQwOTgxMzUsNS4zNjg3Mjk4MSAxMS40MDk4MTM1LDMuNDcxMjcwMTkgMTAuMjQsMi4zIFogTTkuNTQsNS44NCBMNiw5LjM3IEwyLjQ2LDUuODQgQzEuODgzMDgwMSw1LjI2NzgxOTA5IDEuNzA5Njc2MjksNC40MDM0NjY0MiAyLjAyMTI1ODEsMy42NTMwMzY5OSBDMi4zMzI4Mzk5MSwyLjkwMjYwNzU1IDMuMDY3NDY5ODYsMi40MTUyNzQ3NSAzLjg4LDIuNDE5OTY1OTQgQzQuNDA4MTQ1MDQsMi40MTk1Nzg1NCA0LjkxNTAxNzA3LDIuNjI4MDc5MDkgNS4yOSwzIEwzLjY1LDQuNjUgQzMuNTUzMzIyNzcsNC43NDA3MzMzMyAzLjQ5ODQ4MTM1LDQuODY3NDE0MDkgMy40OTg0ODEzNSw1IEMzLjQ5ODQ4MTM1LDUuMTMyNTg1OTEgMy41NTMzMjI3Nyw1LjI1OTI2NjY3IDMuNjUsNS4zNSBDMy43NDA3MzMzMyw1LjQ0NjY3NzIzIDMuODY3NDE0MDksNS41MDE1MTg2NSA0LDUuNTAxNTE4NjUgQzQuMTMyNTg1OTEsNS41MDE1MTg2NSA0LjI1OTI2NjY3LDUuNDQ2Njc3MjMgNC4zNSw1LjM1IEw2LjM1LDMuMzUgTDYuNywzIEM3LjQ5NzQwNzM5LDIuMjQ4MjA1MzkgOC43NDI1OTI2MSwyLjI0ODIwNTM5IDkuNTQsMyBDOS45MTg2MjUzLDMuMzc1NTMzMiAxMC4xMzE1OTY2LDMuODg2NzI0OTMgMTAuMTMxNTk2Niw0LjQyIEMxMC4xMzE1OTY2LDQuOTUzMjc1MDcgOS45MTg2MjUzLDUuNDY0NDY2OCA5LjU0LDUuODQgTDkuNTQsNS44NCBaIiBpZD0i5b2i54q2IiBmaWxsPSIjODk4OTg5Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="
              alt=""
            />
            7*24小时行中服务
          </span>
        </div>
        <div class="fuwu">
          <div class="fuwu-title">6项专属定制服务</div>
          <ul>
            <li v-for="item in 6">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyMnB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTE1IDdhLjUuNSAwIDAwLS41LjV2MWEuNS41IDAgMTAxIDB2LTFBLjUuNSAwIDAwMTUgN3pNMTUgMTAuNWEuNS41IDAgMDAtLjUuNXYxYS41LjUgMCAxMDEgMHYtMWEuNS41IDAgMDAtLjUtLjV6TTE1IDE0YS41LjUgMCAwMC0uNS41djFhLjUuNSAwIDEwMSAwdi0xYS41LjUgMCAwMC0uNS0uNXpNMTUgMTcuNWEuNS41IDAgMDAtLjUuNXYxYS41LjUgMCAxMDEgMHYtMWEuNS41IDAgMDAtLjUtLjV6IiBmaWxsPSIjQzE0Mzc0IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNMSAxNi44NzVBNCA0IDAgMDA0IDEzYTQgNCAwIDAwLTMtMy44NzUiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTIzLjUgNWEuNS41IDAgMDAtLjUtLjVoLTEuNDdsLTEtMy43MDVBLjUzLjUzIDAgMDAyMC4zMDUuNWEuNS41IDAgMDAtLjM4LS4wNUw0Ljc4NSA0LjVIMWEuNS41IDAgMDAtLjUuNXY0LjEyNWEuNS41IDAgMTAxIDBWNS41aDIxdjMuMjU1YTQuNSA0LjUgMCAwMDAgOC41VjIwLjVoLTIxdi0zLjYyNWEuNS41IDAgMTAtMSAwVjIxYS41LjUgMCAwMC41LjVoMjJhLjUuNSAwIDAwLjUtLjV2LTQuMTI1LS4wMzUtLjFhLjY3LjY3IDAgMDAtLjAzNS0uMDlsLS4wNS0uMDc1YS40My40MyAwIDAwLS4wNjUtLjA3LjI2NS4yNjUgMCAwMC0uMDc1LS4wNTVsLS4wOS0uMDQ1YS4wNzUuMDc1IDAgMDEtLjAzNSAwIDMuNSAzLjUgMCAwMTAtNi43OC4wNzUuMDc1IDAgMDEuMDM1IDBsLjA5LS4wNDVhLjI2NS4yNjUgMCAwMC4wNzUtLjA1NS40My40MyAwIDAwLjA2NS0uMDdsLjA1LS4wNzVhLjY3LjY3IDAgMDAuMDM1LS4wOXYtLjFWNXptLTMuOC0zLjQ2bC44IDIuOTZIOC42NDVMMTkuNyAxLjU0eiIgZmlsbD0iIzMzMyIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9nPjwvc3ZnPg=="
                alt=""
              />
              <br />
              往返机票
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="listWrap">
      <div class="titlest">案例分享</div>
      <ul class="list-title">
        <li
          v-for="(item, i) in list.list"
          :class="{ active: num == i }"
          @click="changes(i, item.product_ids)"
        >
          {{ item.name }}
        </li>
      </ul>
      <ul class="typeLists" v-if="listType.length">
        <li v-for="item in listType" :key="item.id">
          <div class="left">
            <img :src="item.img" alt="" />
          </div>
          <div class="right">
            <p class="p1">{{ item.title }}</p>
            <p class="p2">{{ item.subtitle }}</p>
            <ul class="mark">
              <li v-for="item2 in item.mark" :key="item2.name">
                {{ item2.name }}
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>

    <ul class="fooder-type">
      <li>
        <img
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDBweCIgaGVpZ2h0PSI0NnB4IiB2aWV3Qm94PSIwIDAgNDAgNDYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjYgKDY3NDkxKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pY25fcHJvZmVzc2lvbjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSIxMDAlIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM5QUM1RkYiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzQzOTRGRCIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSLmlpHpqazml4XmuLjmlLnniYgiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLnp4HkurrorqLliLYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNC4wMDAwMDAsIC0yMTUyLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i5paR6ams5peF5ri4LeWAvOW+l+aJmOS7mF9Nb2IiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAyMTI4LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IuS4k+S4miIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAuMDAwMDAwLCAyMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iaWNuX3Byb2Zlc3Npb24iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAzLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAiIG9wYWNpdHk9IjAiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTQzLjUsMTIuNDIgTDQzLjUsMjcgQzQzLjUsMzIuMzg1IDM4LjYyNSwzNy4yNiAzMy43NSw0MC43ODUgQzMwLjY4MTY3MTQsNDIuOTg0MjUyMiAyNy40MTc5ODUsNDQuODk3Mjc0NSAyNCw0Ni41IEwyNCwxLjggQzI0LjQzNTE1NTIsMS44MDAwMjI2NiAyNC44NjUwOTY2LDEuODk0NzEyMTQgMjUuMjYsMi4wNzc1IEw0MS43Niw5LjY5NzUgQzQyLjgyMDg5NjEsMTAuMTg4NDgwMiA0My40OTk5NzE4LDExLjI1MDk5OTYgNDMuNSwxMi40MiBaIiBpZD0iUGF0aCIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjQsMS44IEwyNCw0Ni41IEMyNCw0Ni41IDQuNSwzNy43NyA0LjUsMjcgTDQuNSwxMi40MiBDNC41MDAwMjgxOCwxMS4yNTA5OTk2IDUuMTc5MTAzOTIsMTAuMTg4NDgwMiA2LjI0LDkuNjk3NSBMMjIuNzQsMi4wNzc1IEMyMy4xMzQ5MDM0LDEuODk0NzEyMTQgMjMuNTY0ODQ0OCwxLjgwMDAyMjY2IDI0LDEuOCBaIiBpZD0iUGF0aCIgZmlsbD0iIzQzOTRGRCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjQsMTMuNSBMMjQsMTkuNTAwMDA0OSBMMjEuMjkyNSwxOS41IEMyMS4xMjA2MTY3LDE5LjUwMDg3ODcgMjAuOTcxMDg0MywxOS4zODI0OTkgMjAuOTMyNSwxOS4yMTUgTDE5LjYyLDEzLjk2NSBDMTkuNTkyNDg5NCwxMy44NTM3NTE0IDE5LjYxNzM1ODIsMTMuNzM2MDMgMTkuNjg3NTEzMSwxMy42NDU0MTMzIEMxOS43NTc2Njc5LDEzLjU1NDc5NjcgMTkuODY1NDA2OSwxMy41MDEyMzI5IDE5Ljk4LDEzLjUgTDI0LDEzLjUgWiIgaWQ9IlBhdGgiIGZpbGw9IiNDMERCRkUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI0LDIyLjUgTDI0LDM0LjQyNSBDMjMuOTI1MzQ5NSwzNC40MjgyNjkyIDIzLjg1MTY1NTQsMzQuNDA3MjEzOCAyMy43OSwzNC4zNjUgTDE5LjcwMjUsMzEuNjM1IEMxOS41Nzk1NDk1LDMxLjU1MjQ3NjEgMTkuNTE1Mjc2MiwzMS40MDY0MDA2IDE5LjUzNzUsMzEuMjYgTDIwLjk0NzUsMjIuODE1IEMyMC45NzY3NjU5LDIyLjYzNDQxNTMgMjEuMTMyMDYzOSwyMi41MDEzMDI3IDIxLjMxNSwyMi41IEwyNCwyMi41IFoiIGlkPSJQYXRoIiBmaWxsPSIjQzBEQkZFIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNy4wNjc1LDE5LjIxNSBMMjguMzgsMTMuOTY1IEMyOC40MDc1MTA2LDEzLjg1Mzc1MTQgMjguMzgyNjQxOCwxMy43MzYwMyAyOC4zMTI0ODY5LDEzLjY0NTQxMzMgQzI4LjI0MjMzMjEsMTMuNTU0Nzk2NyAyOC4xMzQ1OTMxLDEzLjUwMTIzMjkgMjguMDIsMTMuNSBMMjQsMTMuNSBMMjQsMTkuNTAwMDA0OSBMMjYuNzA3NSwxOS41IEMyNi44NzkzODMzLDE5LjUwMDg3ODcgMjcuMDI4OTE1NywxOS4zODI0OTkgMjcuMDY3NSwxOS4yMTUgWiIgaWQ9IlBhdGgiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI3LjA1MjUsMjIuODE1IEMyNy4wMjMyMzQxLDIyLjYzNDQxNTMgMjYuODY3OTM2MSwyMi41MDEzMDI3IDI2LjY4NSwyMi41IEwyNCwyMi41IEwyNCwzNC40MjUgQzI0LjA3NDY1MDUsMzQuNDI4MjY5MiAyNC4xNDgzNDQ2LDM0LjQwNzIxMzggMjQuMjEsMzQuMzY1IEwyOC4yOTc1LDMxLjYzNSBDMjguNDIwNDUwNSwzMS41NTI0NzYxIDI4LjQ4NDcyMzgsMzEuNDA2NDAwNiAyOC40NjI1LDMxLjI2IEwyNy4wNTI1LDIyLjgxNSBaIiBpZD0iUGF0aCIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
          alt=""
        />
        <div class="right-s">
          <p class="p1">专业</p>
          <div class="p2">
            3年以上资深定制师，人均服务客户30人，综合定制满意度98%
          </div>
        </div>
      </li>
      <li>
        <img
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDBweCIgaGVpZ2h0PSI0NnB4IiB2aWV3Qm94PSIwIDAgNDAgNDYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjYgKDY3NDkxKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pY25fc2VydmljZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSIxMDAlIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRkNEMDAiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0Y4QUQwMCIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSLmlpHpqazml4XmuLjmlLnniYgiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLnp4HkurrorqLliLYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNC4wMDAwMDAsIC0yMjI2LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i5paR6ams5peF5ri4LeWAvOW+l+aJmOS7mF9Nb2IiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAyMTI4LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IuacjeWKoSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAuMDAwMDAwLCA5NC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iaWNuX3NlcnZpY2UiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAzLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAiIG9wYWNpdHk9IjAiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTQzLjUsMTIuNDIgTDQzLjUsMjcgQzQzLjUsMzIuMzg1IDM4LjYyNSwzNy4yNiAzMy43NSw0MC43ODUgQzMwLjY4MTY3MTQsNDIuOTg0MjUyMiAyNy40MTc5ODUsNDQuODk3Mjc0NSAyNCw0Ni41IEwyNCwxLjggQzI0LjQzNTE1NTIsMS44MDAwMjI2NiAyNC44NjUwOTY2LDEuODk0NzEyMTQgMjUuMjYsMi4wNzc1IEw0MS43Niw5LjY5NzUgQzQyLjgyMDg5NjEsMTAuMTg4NDgwMiA0My40OTk5NzE4LDExLjI1MDk5OTYgNDMuNSwxMi40MiBaIiBpZD0iUGF0aCIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjQsMS44IEwyNCw0Ni41IEMyNCw0Ni41IDQuNSwzNy43NyA0LjUsMjcgTDQuNSwxMi40MiBDNC41MDAwMjgxOCwxMS4yNTA5OTk2IDUuMTc5MTAzOTIsMTAuMTg4NDgwMiA2LjI0LDkuNjk3NSBMMjIuNzQsMi4wNzc1IEMyMy4xMzQ5MDM0LDEuODk0NzEyMTQgMjMuNTY0ODQ0OCwxLjgwMDAyMjY2IDI0LDEuOCBaIiBpZD0iUGF0aCIgZmlsbD0iI0Y4QUQwMCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjQsMzAgTDI0LDM0LjUgQzIyLjc1NzM1OTMsMzQuNSAyMS43NSwzMy40OTI2NDA3IDIxLjc1LDMyLjI1IEMyMS43NSwzMS4wMDczNTkzIDIyLjc1NzM1OTMsMzAgMjQsMzAgWiIgaWQ9IlBhdGgiIGZpbGw9IiNGREU0QUEiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI0LDIyLjUgTDI0LDI3IEMyMi43NTczNTkzLDI3IDIxLjc1LDI1Ljk5MjY0MDcgMjEuNzUsMjQuNzUgQzIxLjc1LDIzLjUwNzM1OTMgMjIuNzU3MzU5MywyMi41IDI0LDIyLjUgWiIgaWQ9IlBhdGgiIGZpbGw9IiNGREU0QUEiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI0LDE2LjY0MjUgTDI0LDE3LjU3MjUgTDE4Ljc1LDIyLjgyMjUgQzE4LjY1ODcyMzksMjIuOTE1MzEyMiAxOC41MjU4NDUxLDIyLjk1NDE0OSAxOC4zOTg5NTI3LDIyLjkyNTEwMTQgQzE4LjI3MjA2MDMsMjIuODk2MDUzNyAxOC4xNjkzMDk3LDIyLjgwMzI3NzcgMTguMTI3NSwyMi42OCBMMTUuMzc1LDE0LjQzIEMxNS4zMjc1NjAyLDE0LjI5NDk0NTEgMTUuMzYxMTQ0MiwxNC4xNDQ2NjM4IDE1LjQ2MTU2MjYsMTQuMDQyNjUxNSBDMTUuNTYxOTgxLDEzLjk0MDYzOTEgMTUuNzExNzE0OCwxMy45MDQ2OTI4IDE1Ljg0NzUsMTMuOTUgTDI0LDE2LjY0MjUgWiIgaWQ9IlBhdGgiIGZpbGw9IiNGREU0QUEiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI0LDMwIEwyNCwzNC41IEMyNS4yNDI2NDA3LDM0LjUgMjYuMjUsMzMuNDkyNjQwNyAyNi4yNSwzMi4yNSBDMjYuMjUsMzEuMDA3MzU5MyAyNS4yNDI2NDA3LDMwIDI0LDMwIFoiIGlkPSJQYXRoIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNCwyMi41IEwyNCwyNyBDMjUuMjQyNjQwNywyNyAyNi4yNSwyNS45OTI2NDA3IDI2LjI1LDI0Ljc1IEMyNi4yNSwyMy41MDczNTkzIDI1LjI0MjY0MDcsMjIuNSAyNCwyMi41IFoiIGlkPSJQYXRoIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zMi4xMzc1LDEzLjkyNzUgTDI0LDE2LjY0MjUgTDI0LDE3LjU3MjUgTDI5LjI1LDIyLjgyMjUgQzI5LjM0MTI3NjEsMjIuOTE1MzEyMiAyOS40NzQxNTQ5LDIyLjk1NDE0OSAyOS42MDEwNDczLDIyLjkyNTEwMTQgQzI5LjcyNzkzOTcsMjIuODk2MDUzNyAyOS44MzA2OTAzLDIyLjgwMzI3NzcgMjkuODcyNSwyMi42OCBMMzIuNjI1LDE0LjQzIEMzMi42OTAyMzc5LDE0LjI4OTE1NjUgMzIuNjYxOTYyNiwxNC4xMjI2NzggMzIuNTUzODgxNywxNC4wMTEyNzE1IEMzMi40NDU4MDA4LDEzLjg5OTg2NSAzMi4yODAyNTUzLDEzLjg2NjU1OTEgMzIuMTM3NSwxMy45Mjc1IFoiIGlkPSJQYXRoIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
          alt=""
        />
        <div class="right-s">
          <p class="p1">服务</p>
          <div class="p2">
            100+行中服务团队，7*24小时管家式响应，全球自建司导管理体系
          </div>
        </div>
      </li>
      <li>
        <img
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDBweCIgaGVpZ2h0PSI0NnB4IiB2aWV3Qm94PSIwIDAgNDAgNDYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjYgKDY3NDkxKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pY25fcHJvdGVjdGlvbjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSIxMDAlIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM4NkRFQTUiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzVBQzQ3QSIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSLmlpHpqazml4XmuLjmlLnniYgiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLnp4HkurrorqLliLYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNC4wMDAwMDAsIC0yMzAwLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i5paR6ams5peF5ri4LeWAvOW+l+aJmOS7mF9Nb2IiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAyMTI4LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IuS/nemanCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAuMDAwMDAwLCAxNjguMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Imljbl9wcm90ZWN0aW9uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMy4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIiBvcGFjaXR5PSIwIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIHg9IjAiIHk9IjAiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00My41LDEyLjQyIEw0My41LDI3IEM0My41LDMyLjM4NSAzOC42MjUsMzcuMjYgMzMuNzUsNDAuNzg1IEMzMC42ODE2NzE0LDQyLjk4NDI1MjIgMjcuNDE3OTg1LDQ0Ljg5NzI3NDUgMjQsNDYuNSBMMjQsMS44IEMyNC40MzUxNTUyLDEuODAwMDIyNjYgMjQuODY1MDk2NiwxLjg5NDcxMjE0IDI1LjI2LDIuMDc3NSBMNDEuNzYsOS42OTc1IEM0Mi44MjA4OTYxLDEwLjE4ODQ4MDIgNDMuNDk5OTcxOCwxMS4yNTA5OTk2IDQzLjUsMTIuNDIgWiIgaWQ9IlBhdGgiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI0LDEuOCBMMjQsNDYuNSBDMjQsNDYuNSA0LjUsMzcuNzcgNC41LDI3IEw0LjUsMTIuNDIgQzQuNTAwMDI4MTgsMTEuMjUwOTk5NiA1LjE3OTEwMzkyLDEwLjE4ODQ4MDIgNi4yNCw5LjY5NzUgTDIyLjc0LDIuMDc3NSBDMjMuMTM0OTAzNCwxLjg5NDcxMjE0IDIzLjU2NDg0NDgsMS44MDAwMjI2NiAyNCwxLjggWiIgaWQ9IlBhdGgiIGZpbGw9IiM1QUM0N0EiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTMzLDIzLjI1IEwyNC43NSwyMy4yNSBMMjQuNzUsMzIuMjUgQzI0Ljc0ODcwNywzMi44ODg2Nzg4IDI0LjQ3NjA0NTIsMzMuNDk2NzE0NiAyNCwzMy45MjI1IEwyNCwxMy41IEMyNC40MTQyMTM2LDEzLjUgMjQuNzUsMTMuODM1Nzg2NCAyNC43NSwxNC4yNSBMMjQuNzUsMTQuMjg3NSBDMjkuNDExMTUxNywxNC42NzcyODQgMzIuOTk2NzgsMTguNTcyNTgwMSAzMywyMy4yNSBaIiBpZD0iUGF0aCIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjQsMTMuNSBMMjQsMzMuOTIyNSBDMjMuMzM5MjY3OSwzNC41MTM0OCAyMi4zOTMxMTE0LDM0LjY2MTQyMDkgMjEuNTgzNTE1NCwzNC4zMDAzNDExIEMyMC43NzM5MTk0LDMzLjkzOTI2MTIgMjAuMjUxNzkxNCwzMy4xMzY0NjU1IDIwLjI1LDMyLjI1IEMyMC4yNSwzMS44MzU3ODY0IDIwLjU4NTc4NjQsMzEuNSAyMSwzMS41IEMyMS40MTQyMTM2LDMxLjUgMjEuNzUsMzEuODM1Nzg2NCAyMS43NSwzMi4yNSBDMjEuNzUsMzIuNjY0MjEzNiAyMi4wODU3ODY0LDMzIDIyLjUsMzMgQzIyLjkxNDIxMzYsMzMgMjMuMjUsMzIuNjY0MjEzNiAyMy4yNSwzMi4yNSBMMjMuMjUsMjMuMjUgTDE1LDIzLjI1IEMxNS4wMDMyMiwxOC41NzI1ODAxIDE4LjU4ODg0ODMsMTQuNjc3Mjg0IDIzLjI1LDE0LjI4NzUgTDIzLjI1LDE0LjI1IEMyMy4yNSwxMy44MzU3ODY0IDIzLjU4NTc4NjQsMTMuNSAyNCwxMy41IFoiIGlkPSJQYXRoIiBmaWxsPSIjQzhFQkQzIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
          alt=""
        />
        <div class="right-s">
          <p class="p1">保障</p>
          <div class="p2">
            7大阳光政策，人性化退改，28类质量问题无条件先行赔付
          </div>
        </div>
      </li>
    </ul>
    <div style="margin-top: 1.5rem"></div>
    <Fooders></Fooders>
  </div>
</template>

<script>
import Fooders from "../components/Fooders.vue";
import { getQiYe, getIndexHotel } from "../tools/ajax";
export default {
  name: "QiYe",

  data() {
    return {
      list: {},
      flag: false,
      idss: [],
      listType: [],
      num: 0,
    };
  },
  components: {
    Fooders,
  },

  created() {
    getQiYe().then((res) => {
      this.list = res.data;
      this.idss = res.data.list[0].product_ids;
      this.flag = true;
      this.getListType();
    });
  },

  methods: {
    changes(i, ids) {
      this.num = i;
      this.idss = ids;
      this.getListType();
    },
    getListType() {
      getIndexHotel({ ids: this.idss }).then((res) => {
        this.listType = [];
        this.listType = res.data.data.list;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.hed {
  width: 100%;
  height: 3.6rem;
}
.wrap {
  .hed {
    width: 100%;
    height: 3.6rem;
    position: relative;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
    .typs {
      width: 100%;
      height: 1.04rem;
      position: absolute;
      box-sizing: border-box;
      padding: 0 0.5rem;
      bottom: 0;
      a {
        width: 3.2rem;
        height: 100%;
        display: inline-block;
        color: #fff;
        letter-spacing: 0.02133rem;
        background: rgba(0, 0, 0, 0.6);
        position: relative;
        border-radius: 0.21333rem 0 0 0;
      }
      .sp1 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .a {
        color: #c14374;
        background: #ffffff;
      }
    }
  }
}

.wrap {
  .hed {
    width: 100%;
    height: 3.6rem;
    position: relative;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
    .typs {
      width: 100%;
      height: 1.04rem;
      position: absolute;
      box-sizing: border-box;
      padding: 0 0.5rem;
      bottom: 0;
      a {
        width: 3.2rem;
        height: 100%;
        display: inline-block;
        color: #fff;
        letter-spacing: 0.02133rem;
        background: rgba(0, 0, 0, 0.6);
        position: relative;
        border-radius: 0.21333rem 0 0 0;
      }
      .sp1 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .a {
        color: #c14374;
        background: #ffffff;
      }
    }
  }
  .biaodan {
    width: 100%;
    box-sizing: border-box;
    padding: 0 0.36rem;
  }
  .sumbits {
    width: 100%;
    padding: 0.3rem;
    box-sizing: border-box;
    li {
      padding: 0.3rem 0;
      display: flex;
      justify-content: space-between;
      color: #666;
      border-bottom: 0.01333rem solid #e1e1e1;
    }
    button {
      width: 100%;
      height: 1rem;
      color: white;
      margin-top: 0.2rem;
      border: none !important;
      background-color: #c14374 !important;
      border-radius: 3px;
    }
  }
  .fuwu {
    width: 100%;
    margin: 0.2rem 0;
    .fuwu-title {
      //   margin: 0.1rem 0;
      color: #333;
      font-weight: bold;
      font-size: 0.32rem;
    }
    ul {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      li {
        padding: 0.4rem;
      }
    }
  }
}
.fhs {
  width: 100%;
  display: flex;
  span {
    font-size: 0.1rem;
  }
}

.listWrap {
  width: 100%;
  padding: 0 0.6rem;
  box-sizing: border-box;
  .titlest {
    text-align: left;
    font-size: 0.28rem;
    font-weight: bold;
  }
  .list-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    li {
      background-color: #f6f6f6;
      color: #333;
      font-size: 0.24rem;
      border-radius: 2px;
      margin-right: 9px;
      padding: 0.12rem 0.18rem;
      cursor: pointer;
    }
    .active {
      background-color: #c04374;
      color: #fff;
    }
  }
}
.typeLists {
  width: 100%;

  li {
    margin: 0.2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .left {
    width: 2.2rem;
    height: 2rem;
    img {
      display: block;
      width: 2.2rem;
      height: 2rem;
    }
  }
  .right {
    text-align: left;
    padding-left: 0.2rem;
    box-sizing: border-box;
    .p1 {
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: #333333;
      letter-spacing: 0;
      margin-bottom: 1px;
    }
    .p2 {
      font-family: PingFangSC-Light;
      font-size: 11px;
      color: #898989;
      letter-spacing: 0.004rem;
    }
    .mark {
      display: flex;
      li {
        display: inline-block;
        background: #ffffff;
        border: 1px solid rgba(193, 67, 116, 0.5);
        border-radius: 0.05333rem;
        padding: 0.04rem 0.1rem;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        font-family: PingFangSC-Regular;
        font-size: 0.2rem;
        color: #c14374;
        margin-right: 0.1rem;
      }
    }
  }
}
.fooder-type {
  width: 100%;
  margin-top: 0.4rem;
  padding-top: 0.4rem;
  border-top: 0.01333rem solid #e1e1e1;
  padding: 0 0.6rem;
  box-sizing: border-box;
  li {
    margin-bottom: 0.2rem;
    margin-top: 0.2rem;
    display: flex;
    justify-content: space-between;
    img {
      display: block;
      width: 0.8rem;
      height: 1rem;
    }
    .right-s {
      text-align: left;
      padding-left: 0.4rem;
      box-sizing: border-box;
    }
    .p1 {
      font-weight: bold;
      color: #333;
    }
    .p2 {
      font-family: PingFangSC-Regular;
      font-size: 0.2rem;
      color: #898989;
      letter-spacing: 0.004rem;
    }
  }
}
</style>