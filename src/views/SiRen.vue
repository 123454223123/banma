<template>
  <div>
    <div class="wrap" v-if="flag">
      <div class="hed">
        <img :src="list.data[0].data[0].img.url" alt="" />
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
            <!-- 目的地 -->
            <li>
              <van-cell @click="showPopup1">
                <span>目的地(必选)</span>
                <span><van-icon name="arrow-down" /></span>
              </van-cell>
              <van-popup
                v-model:show="show1"
                position="bottom"
                duration="0.2"
                :style="{ height: '70%' }"
                >目的地</van-popup>
            </li>
            <!-- 预计出游时间 -->
            <li>
              <van-cell @click="showPopup2">
                <span>预计出游时间(非必选)</span>
                <span><van-icon name="arrow-down" /></span>
              </van-cell>
                    <van-popup
                v-model:show="show2"
                position="bottom"
                duration="0.2"
                :style="{ height: '70%' }"
                >预计出游时间</van-popup>
            </li>
            <!-- 你的名字 -->
            <li>
              <span>您的名字(非必选)</span>
            </li>
          </ul>
          <button>免费获取出行方案</button>

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
        </div>
     
        <div class="fuwu">
          <div class="fuwu-title">10项专属定制服务</div>
          <ul>
            <li v-for="item in imgList">
              <img :src="item.url" alt="" />
              <br />
              {{ item.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="boxs" v-if="flag">
      <!-- 不同 -->
      <div class="t1">
        <img :src="list.data[1].data[0].img.url" alt="" />
      </div>
      <div class="banner">
        <van-swipe class="my-swipe" :autoplay="2000">
          <van-swipe-item
            v-for="item in list.data[2].data"
            :key="item.id"
            swipeTo="i"
          >
            <router-link :to="'/lunbo?id=' + item.url">
              <img :src="item.img.url" alt="" />
            </router-link>
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="t1">
        <img :src="list.data[3].data[0].img.url" alt="" />
      </div>

      <!--  -->
      <div class="three" v-if="dingList.length">
        <div class="box">
          <van-swipe
            class="my-swipe"
            indicator-color="white"
            :loop="false"
            :width="165"
          >
            <van-swipe-item v-for="(item, i) in dingList" :key="item.id">
              <div class="lunbo2">
                <img :src="item.avatar" alt="" />
                <div class="bot">
                  <span class="s1">服务{{ item.service_count }}人</span>
                  <p class="p1">
                    <span v-for="(item2, index) in item.mark" :key="index">{{
                      item2
                    }}</span>
                  </p>
                  <p class="p2">{{ item.name }}</p>
                  <p class="p3">{{ item.desc }}</p>
                  <div class="pingfen">
                    <van-rate
                      :size="10"
                      color="#C14374"
                      v-model="value"
                      readonly
                    />
                    <span>好评率{{ item.good_rate }}%</span>
                  </div>
                </div>
              </div>
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
      <Mains
        :titles="list.data[5].data[0].img.url"
        :mains="list.data[6].data.ids"
      ></Mains>
      <Mains
        :titles="list.data[7].data[0].img.url"
        :mains="list.data[8].data.ids"
      ></Mains>
      <Mains
        :titles="list.data[9].data[0].img.url"
        :mains="list.data[10].data.ids"
      ></Mains>

      <div style="margin-top: 1.5rem"></div>
    </div>
    <Fooders></Fooders>
  </div>
</template>

<script>
import Fooders from "../components/Fooders.vue";
import Mains from "../components/Mains.vue";
import { getSiRen, getDingZhiShi } from "../tools/ajax";
export default {
  name: "SiRen",

  data() {
    return {
      list: [],
      flag: false,
      dingList: [],
      show1: false,
      show2: false,
      imgList: [
        {
          name: "往返机票",
          url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyMnB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTE1IDdhLjUuNSAwIDAwLS41LjV2MWEuNS41IDAgMTAxIDB2LTFBLjUuNSAwIDAwMTUgN3pNMTUgMTAuNWEuNS41IDAgMDAtLjUuNXYxYS41LjUgMCAxMDEgMHYtMWEuNS41IDAgMDAtLjUtLjV6TTE1IDE0YS41LjUgMCAwMC0uNS41djFhLjUuNSAwIDEwMSAwdi0xYS41LjUgMCAwMC0uNS0uNXpNMTUgMTcuNWEuNS41IDAgMDAtLjUuNXYxYS41LjUgMCAxMDEgMHYtMWEuNS41IDAgMDAtLjUtLjV6IiBmaWxsPSIjQzE0Mzc0IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNMSAxNi44NzVBNCA0IDAgMDA0IDEzYTQgNCAwIDAwLTMtMy44NzUiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTIzLjUgNWEuNS41IDAgMDAtLjUtLjVoLTEuNDdsLTEtMy43MDVBLjUzLjUzIDAgMDAyMC4zMDUuNWEuNS41IDAgMDAtLjM4LS4wNUw0Ljc4NSA0LjVIMWEuNS41IDAgMDAtLjUuNXY0LjEyNWEuNS41IDAgMTAxIDBWNS41aDIxdjMuMjU1YTQuNSA0LjUgMCAwMDAgOC41VjIwLjVoLTIxdi0zLjYyNWEuNS41IDAgMTAtMSAwVjIxYS41LjUgMCAwMC41LjVoMjJhLjUuNSAwIDAwLjUtLjV2LTQuMTI1LS4wMzUtLjFhLjY3LjY3IDAgMDAtLjAzNS0uMDlsLS4wNS0uMDc1YS40My40MyAwIDAwLS4wNjUtLjA3LjI2NS4yNjUgMCAwMC0uMDc1LS4wNTVsLS4wOS0uMDQ1YS4wNzUuMDc1IDAgMDEtLjAzNSAwIDMuNSAzLjUgMCAwMTAtNi43OC4wNzUuMDc1IDAgMDEuMDM1IDBsLjA5LS4wNDVhLjI2NS4yNjUgMCAwMC4wNzUtLjA1NS40My40MyAwIDAwLjA2NS0uMDdsLjA1LS4wNzVhLjY3LjY3IDAgMDAuMDM1LS4wOXYtLjFWNXptLTMuOC0zLjQ2bC44IDIuOTZIOC42NDVMMTkuNyAxLjU0eiIgZmlsbD0iIzMzMyIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9nPjwvc3ZnPg==",
        },
        {
          name: "精选酒店",
          url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyNHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTcgMjNhLjUuNSAwIDAxLS41LS41di04YS41LjUgMCAxMTEgMHY4YS41LjUgMCAwMS0uNS41eiIgZmlsbD0iI0MxNDM3NCIvPjxwYXRoIGQ9Ik0xMSAyMy41YTU5LjU3NSA1OS41NzUgMCAwMS0xMC4xLTEgLjUuNSAwIDAxLS40LS41VjVhLjUuNSAwIDAxLjM0LS40NzVsMTItNGEuNS41IDAgMDEuNDUuMDcuNS41IDAgMDEuMjEuNDA1djIxLjRjMi44NTUtLjIwNSA1LjkxLS42NTUgNy0uODI1VjExLjMxbC0zLjcyNS0xLjg2NWEuNS41IDAgMTEuNDUtLjg5bDQgMkEuNS41IDAgMDEyMS41IDExdjExYS41LjUgMCAwMS0uNDIuNWMtLjI0NS4wMzUtNi4wOCAxLTEwLjA4IDF6bS05LjUtMS45MTVhNTguMiA1OC4yIDAgMDA5LjUuOTE1Yy40NzUgMCAxIDAgMS41LS4wNFYxLjY5NUwxLjUgNS4zNnYxNi4yMjV6IiBmaWxsPSIjMzMzIi8+PC9nPjwvc3ZnPg==",
        },
        {
          name: "目的地交通",
          url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyMXB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBzdHJva2U9IiMzMzMiIGQ9Ik0yMSAyMGgtNXYtMkg2djJIMXYtOUw0IDFoMTRsMyAxMHoiLz48cGF0aCBzdHJva2U9IiMzMzMiIGQ9Ik0yMiA3bC0yLjA1LjVIMi4wNUwwIDciLz48cGF0aCBzdHJva2U9IiNDMTQzNzQiIGQ9Ik04IDE0SDRNMTggMTRoLTQiLz48L2c+PC9zdmc+",
        },
        {
          name: "中文导游",
          url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyNHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTIxLjE3IDUuNjk1bC01Ljc5NS0xLjU1YS41LjUgMCAwMC0uNjE1LjM1NWwtMS41NSA1Ljc4TDEyIDE0Ljg3YS41LjUgMCAwMC4zMzUuNjNoLjEzYS41LjUgMCAwMC41LS4zN2wxLjE3LTQuMzc1IDcuMTctNC4xNGEuNS41IDAgMDAtLjEyLS45MmgtLjAxNXptLTYuNjcgMy42OWwxLjExNS00LjE0NSA0LjE0NSAxLjExLTUuMjYgMy4wMzV6IiBmaWxsPSIjQzE0Mzc0Ii8+PHBhdGggZD0iTTE1LjUgMTQuNWgtMTFBNC41IDQuNSAwIDAwMCAxOXY0YS41LjUgMCAwMC41LjVoMTlhLjUuNSAwIDAwLjUtLjV2LTRhNC41IDQuNSAwIDAwLTQuNS00LjV6bTMuNSA4SDFWMTlhMy41IDMuNSAwIDAxMy41LTMuNWgxMUEzLjUgMy41IDAgMDExOSAxOXYzLjV6TTkuNSAxMy41QTQuNSA0LjUgMCAwMDE0IDlWNWE0LjUgNC41IDAgMTAtOSAwdjRhNC41IDQuNSAwIDAwNC41IDQuNXpNNiA1YTMuNSAzLjUgMCAwMTcgMHY0YTMuNSAzLjUgMCAwMS03IDBWNXoiIGZpbGw9IiMzMzMiLz48L2c+PC9zdmc+",
        },
        {
          name: "行程设计",
          url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyNHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTE5IDE4LjVIM2ExLjUgMS41IDAgMDEwLTNoNGEuNS41IDAgMTAwLTFIM2EyLjUgMi41IDAgMTAwIDVoMTZhMS41IDEuNSAwIDAxMCAzaC00YS41LjUgMCAxMDAgMWg0YTIuNSAyLjUgMCAxMDAtNXoiIGZpbGw9IiNDMTQzNzQiLz48cGF0aCBkPSJNMTEgLjVBNy41IDcuNSAwIDAwMy41IDhjMCA0LjA0NSA2Ljg4IDEwLjEyIDcuMTcgMTAuMzc1YS41LjUgMCAwMC42NiAwYy4yOS0uMjU1IDcuMTctNi4zMyA3LjE3LTEwLjM3NUE3LjUgNy41IDAgMDAxMSAuNXptMCAxNi44MjVDOS42MzUgMTYuMDcgNC41IDExLjEzNSA0LjUgOGE2LjUgNi41IDAgMDExMyAwYzAgMy4xMzUtNS4xMzUgOC4wNy02LjUgOS4zMjV6IiBmaWxsPSIjMzMzIi8+PHBhdGggZD0iTTExIDQuNWEzLjUgMy41IDAgMTAwIDcgMy41IDMuNSAwIDAwMC03em0wIDZhMi41IDIuNSAwIDExMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMzMzMiLz48L2c+PC9zdmc+",
        },
        {
          name: "特色体验",
          url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyMnB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTE1IDIyYS41LjUgMCAwMS0uNS0uNSAzLjUgMy41IDAgMDAtNyAwIC41LjUgMCAxMS0xIDAgNC41IDQuNSAwIDExOSAwIC41LjUgMCAwMS0uNS41eiIgZmlsbD0iI0MxNDM3NCIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggc3Ryb2tlPSIjMzMzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0wIDIxLjVIMjIiLz48cGF0aCBkPSJNMTUgOUg3YS41LjUgMCAwMTAtMWg4YS41LjUgMCAxMTAgMXpNMTcgMTJINWEuNS41IDAgMTEwLTFoMTJhLjUuNSAwIDExMCAxek0xMi41IDZoLTNhLjUuNSAwIDAxLS41LS41VjRhMiAyIDAgMTE0IDB2MS41YS41LjUgMCAwMS0uNS41ek0xMCA1aDJWNGExIDEgMCAwMC0yIDB2MXoiIGZpbGw9IiMzMzMiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik0xMSAzYS41LjUgMCAwMS0uNS0uNXYtMmEuNS41IDAgMTExIDB2MmEuNS41IDAgMDEtLjUuNXpNMjEuMjQ1IDIyYS41LjUgMCAwMS0uMjctLjA4QTE5LjQ0IDE5LjQ0IDAgMDExMiA1LjVhLjUuNSAwIDAxMSAwIDE4LjQ1IDE4LjQ1IDAgMDA4LjUgMTUuNTguNS41IDAgMDEtLjI1NS45MnpNLjc1NSAyMmEuNS41IDAgMDEtLjI1NS0uOTJBMTguNDUgMTguNDUgMCAwMDkgNS41YS41LjUgMCAxMTEgMCAxOS40NCAxOS40NCAwIDAxLTguOTc1IDE2LjQyLjUuNSAwIDAxLS4yNy4wOHoiIGZpbGw9IiMzMzMiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvZz48L3N2Zz4=",
        },
        {
          name: "旅行管家",
          url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyNHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xKSIgZmlsbC1ydWxlPSJub256ZXJvIiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTIgLjVDNi4yMDEuNSAxLjUgNS4yMDEgMS41IDExdjdBMi41IDIuNSAwIDAwNCAyMC41aDJBMi41IDIuNSAwIDAwOC41IDE4di01QTIuNSAyLjUgMCAwMDYgMTAuNUgyLjUyNWE5LjUgOS41IDAgMDExOC45NzUgMEgxOGEyLjUgMi41IDAgMDAtMi41IDIuNXY1YTIuNSAyLjUgMCAwMDIuNSAyLjVoMS4xMkE5LjQwNSA5LjQwNSAwIDAxMTQgMjJhLjUuNSAwIDEwMCAxYy4zNyAwIC43MjUgMCAxLjA0NS0uMDVhMTAuNDA1IDEwLjQwNSAwIDAwNi4wNDUtMi43MUEyLjUgMi41IDAgMDAyMi41IDE4di03QzIyLjUgNS4yMDEgMTcuNzk5LjUgMTIgLjV6TTcuNSAxM3Y1QTEuNSAxLjUgMCAwMTYgMTkuNUg0QTEuNSAxLjUgMCAwMTIuNSAxOHYtNi41SDZBMS41IDEuNSAwIDAxNy41IDEzem0xMy4xMiA2LjM2aC0uMDNhMS40NSAxLjQ1IDAgMDEtLjU5LjE0aC0yYTEuNSAxLjUgMCAwMS0xLjUtMS41di01YTEuNSAxLjUgMCAwMTEuNS0xLjVoMy41VjE4YTEuNSAxLjUgMCAwMS0uODggMS4zNnoiIGZpbGw9IiMzMzMiLz48cmVjdCBmaWxsPSIjQzE0Mzc0IiB4PSIxMiIgeT0iMjEuNzUiIHdpZHRoPSIzIiBoZWlnaHQ9IjEuNSIgcng9IjAuNzUiLz48L2c+PC9zdmc+",
        },
        {
          name: "签证",
          url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyNHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTE2IDE5LjVINmEuNS41IDAgMTEwLTFoMTBhLjUuNSAwIDExMCAxeiIgZmlsbD0iI0MxNDM3NCIvPjxwYXRoIGQ9Ik0yMSAuNUgxYS41LjUgMCAwMC0uNS41djIyYS41LjUgMCAwMC41LjVoMjBhLjUuNSAwIDAwLjUtLjVWMWEuNS41IDAgMDAtLjUtLjV6bS0uNSAyMmgtMTl2LTIxaDE5djIxeiIgZmlsbD0iIzMzMyIvPjxwYXRoIGQ9Ik0xMSAxNS41YTUuNSA1LjUgMCAxMDAtMTEgNS41IDUuNSAwIDAwMCAxMXptLTQuNDctNWgyYTkuMzA1IDkuMzA1IDAgMDAuODMgMy42OCA0LjUgNC41IDAgMDEtMi44My0zLjY4em00LjQ3LTVjLjU3NSAwIDEuMzkgMS41NCAxLjUgNGgtM2MuMTEtMi40Ni45MjUtNCAxLjUtNHptMS41IDVjLS4xIDIuNDYtLjkxNSA0LTEuNSA0cy0xLjM5LTEuNTQtMS41LTRoM3ptLjE3IDMuNjhhOS4zMDUgOS4zMDUgMCAwMC44My0zLjY4aDJhNC41IDQuNSAwIDAxLTIuODQgMy42OGguMDF6bTIuOC00LjY4SDEzLjVhOS4zMDUgOS4zMDUgMCAwMC0uODMtMy42OCA0LjUgNC41IDAgMDEyLjggMy42OHpNOS4zNCA1LjgyQTkuMzA1IDkuMzA1IDAgMDA4LjUgOS41aC0yYTQuNSA0LjUgMCAwMTIuODQtMy42OHoiIGZpbGw9IiMzMzMiLz48L2c+PC9zdmc+",
        },
        {
          name: "保险",
          url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyNHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xKSIgZmlsbC1ydWxlPSJub256ZXJvIiBmaWxsPSJub25lIj48cGF0aCBkPSJNMjIuMTQ1IDMuNWwtMTAtM2EuNTcuNTcgMCAwMC0uMjkgMGwtMTAgM0EuNS41IDAgMDAxLjUgNHY4YzAgNi4zMTUgOS44NiAxMS4yNCAxMC4yOCAxMS40NWEuNS41IDAgMDAuNDQgMGMuNDItLjIxIDEwLjI4LTUuMTM1IDEwLjI4LTExLjQ1VjRhLjUuNSAwIDAwLS4zNTUtLjV6TTIxLjUgMTJjMCA1LjIxLTguMDUgOS42NzUtOS41IDEwLjQ0LTEuNDUtLjc2NS05LjUtNS4yMy05LjUtMTAuNDRWNC4zN0wxMiAxLjVsOS41IDIuODVWMTJ6IiBmaWxsPSIjMzMzIi8+PHBhdGggZD0iTTExLjUgOHY4YS41LjUgMCAxMDEgMFY4YS41LjUgMCAxMC0xIDB6IiBmaWxsPSIjMzMzIi8+PGNpcmNsZSBmaWxsPSIjQzE0Mzc0IiBjeD0iMTIiIGN5PSI5IiByPSIxLjUiLz48L2c+PC9zdmc+",
        },
        {
          name: "随身WIFI",
          url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIxN3B4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTE5IDkuNTU1YS41LjUgMCAwMS0uMzU1LS44NWwzLjY0LTMuNjQ1Yy01Ljc5Mi01LjQwNS0xNC43NzgtNS40MDUtMjAuNTcgMGwzLjY0IDMuNjQ1YS41LjUgMCAxMS0uNzEuNzA1bC00LTRhLjUuNSAwIDAxMC0uNzA1YzYuMjc2LTYuMjYgMTYuNDM0LTYuMjYgMjIuNzEgMGEuNS41IDAgMDEwIC43MDVsLTQgNGEuNS41IDAgMDEtLjM1NS4xNDV6IiBmaWxsPSIjMzMzIi8+PHBhdGggZD0iTTE5IDkuNTU1YS41LjUgMCAwMS0uMzU1LS4xNDUgOS40MDUgOS40MDUgMCAwMC0xMy4yOSAwIC41LjUgMCAxMS0uNzEtLjcwNWM0LjA2NS00LjA1NSAxMC42NDUtNC4wNTUgMTQuNzEgMGEuNS41IDAgMDEtLjM1NS44NXpNMTUgMTMuNTU1YS41LjUgMCAwMS0uMzU1LS4xNDUgMy43NCAzLjc0IDAgMDAtNS4yOSAwIC41LjUgMCAxMS0uNzEtLjcwNSA0Ljc0NSA0Ljc0NSAwIDAxNi43MSAwIC41LjUgMCAwMS0uMzU1Ljg1eiIgZmlsbD0iI0MxNDM3NCIvPjxwYXRoIGQ9Ik0xMiAxNi41NTVhLjUuNSAwIDAxLS4zNTUtLjE0NWwtMTEtMTFhLjUuNSAwIDExLjcxLS43MDVMMTIgMTUuMzUgMjIuNjQ1IDQuNzA1YS41LjUgMCAxMS43MS43MDVsLTExIDExYS41LjUgMCAwMS0uMzU1LjE0NXoiIGZpbGw9IiMzMzMiLz48L2c+PC9zdmc+",
        },
      ],
    };
  },
  components: {
    Fooders,
    Mains,
  },
  methods: {
    showPopup1() {
      this.show1 = true;
    },
    showPopup2() {
      this.show2 = true;
    },
  },

  created() {
    getSiRen().then((res) => {
      this.list = res.data;
      this.flag = true;
      let ids = [];
      this.list.data[4].data.forEach((item) => {
        ids.push(item.id);
      });
      getDingZhiShi({ ids: ids }).then((res) => {
        this.dingList = res.data.list;
      });
    });
  },
};
</script>

<style lang="scss" scoped>
:deep(.jiuList) {
  padding: 0;
}
:deep(.jiuList .jiuList-ul .jiuList-li) {
  width: 3.1rem;
  cursor: pointer;
  height: 3.94rem;
  margin-top: 0.1rem;
  overflow: hidden;
  box-shadow: 0 0 0.04rem #ebe0e0;
}
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
  .biaodan {
    width: 100%;
    box-sizing: border-box;
    padding: 0 0.36rem;
  }
  .sumbits {
    width: 100%;
    padding: 0.3rem;
    box-shadow: 0 0 0.21333rem 0 rgba(0,0,0,0.08);
    box-sizing: border-box;
    li {
      padding: 0.3rem 0;
      display: flex !important;
      justify-content: space-between;
      color: #666;
      border-bottom: 0.01333rem solid #e1e1e1;

      :deep(.van-cell:last-child::after, .van-cell--borderless::after) {
        display: none;
      }
      :deep(.van-cell) {
        padding: 0;
        display: flex;
        border-bottom: none;
      }
      :deep(.van-cell::after) {
        border-bottom: none;
      }
      :deep(.van-cell__value) {
        display: flex;
        justify-content: space-between;
        color: #666;
        font-size: 12px;
      }
      span {
        display: block;
      }
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
      margin: 0.2rem 0;
      color: #333;
      font-weight: bold;
    }
    ul {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      li {
        padding: 0.1rem;
        width: 1.1rem;
        height: 0.84rem;
        font-size: 0.2rem;
      }
    }
  }
}
.fls {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: .3rem;
  padding: 0 .3rem;
  box-sizing: border-box;
  span {
    font-size: 0.2rem;
  }
}
.boxs {
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.5rem;
  margin-top: 0.2rem;
}
.t1 {
  margin-top: 0.3rem;
  img {
    width: 100%;
  }
}
.banner {
  width: 6.8rem;
  height: 3.78rem;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
  border-radius: 3px;

  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    width: 6.8rem;
    height: 4.78rem;
    text-align: center;
    img {
      width: 6.8rem;
      height: 4.78rem;
    }
  }
  :deep(.van-swipe__indicator) {
    border-radius: 0;
    width: 0.12rem;
    height: 0.04rem;
  }
}
// 轮播图样式

.three {
  .swipe-li {
    width: 2rem;
    margin-right: 0.2rem;
    .ts {
      display: block;
      width: 100%;
    }
  }

  .box {
    width: 100%;
    // padding: 0 18px;
    box-sizing: border-box;

    .lunbo2 {
      margin-right: 9px;

      img {
        width: 100%;
      }

      .bot {
        border-radius: 2px;
        padding: 6px 9px 9px;
        border: 0.5px solid #e1e1e1;
        border-top: none;
        box-sizing: border-box;
        position: relative;
        text-align: left;

        .s1 {
          position: absolute;
          right: 0;
          top: -18px;
          height: 18px;
          background: rgba(0, 0, 0, 0.7);
          font-family: PingFangSC-Regular;
          font-size: 11px;
          color: #fff;
          letter-spacing: 0;
          padding: 0 3px;
        }

        .p1 {
          font-size: 9px;
          color: #333;
          font-weight: 700;
        }

        .p2 {
          font-size: 15px;
          font-weight: 700;
          color: #333;
          letter-spacing: 0.8px;
          margin-bottom: 3px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .p3 {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
          font-family: PingFangSC-Light;
          font-size: 12px;
          color: #1a1a1a;
          letter-spacing: 0.3px;
          margin-bottom: 9px;
          min-height: 51px;
        }

        .pingfen {
          vertical-align: top;
          height: 0.2rem;

          .van-rate--readonly {
            vertical-align: top;
          }

          span {
            vertical-align: middle;
            font-size: 10px;
            color: #c14374;
            letter-spacing: 0;
            margin-left: 6px;
            vertical-align: top;
          }
        }
      }
    }
  }
}
</style>