export const problemHtml = `<div class="row" style="user-select: auto;">
<div class="col-md-12" style="user-select: auto;">
    <div id="result_log" style="user-select: auto;"></div>
</div>
<div class="col-md-12" style="user-select: auto;">
                    <ul class="nav nav-pills no-print problem-menu" style="user-select: auto;"><li class="active" style="user-select: auto;">
<a href="/problem/2798" style="user-select: auto;">2798번</a>
</li><li style="user-select: auto;"><a href="/submit/2798" style="user-select: auto;">제출</a></li><li style="user-select: auto;"><a href="/problem/status/2798" style="user-select: auto;">맞은 사람</a></li><li style="user-select: auto;"><a href="/short/status/2798" style="user-select: auto;">숏코딩</a></li><li style="user-select: auto;"><a href="/problem/history/2798" style="user-select: auto;">재채점 결과</a></li><li style="user-select: auto;"><a href="/status?from_problem=1&amp;problem_id=2798" style="user-select: auto;">채점 현황</a></li><li class="dropdown" style="user-select: auto;"><a class="dropdown-toggle" id="drop5" role="button" data-toggle="dropdown" href="#" style="user-select: auto;">강의<b class="caret" style="user-select: auto;"></b></a><ul id="menu2" class="dropdown-menu" role="menu" aria-labelledby="drop5" style="user-select: auto;"><li style="user-select: auto;"><a tabindex="-1" href="#" class="lecture-request" style="user-select: auto;">강의 요청하기</a></li></ul></li></ul>
            </div>
<div class="col-md-12" style="user-select: auto;">
    <div class="page-header" style="user-select: auto;">
        <h1 style="user-select: auto;"><span class="printable" style="user-select: auto;">
2798번
- </span><span id="problem_title" style="user-select: auto;">블랙잭</span>
        <span class="label-primary problem-label" style="user-select: auto;">출처</span><span class="label-default problem-label" style="user-select: auto;">다국어</span>				<div class="btn-group pull-right problem-button" style="user-select: auto;">
                                                </div>
        </h1>
                            
                    </div>
</div>
<div class="col-md-12" style="user-select: auto;">
    <div class="table-responsive" style="user-select: auto;">
        <table class="table" id="problem-info" style="user-select: auto;">
        <thead style="user-select: auto;">
        <tr style="user-select: auto;">
                            <th style="width: 16%; user-select: auto;">시간 제한</th>
            <th style="width: 16%; user-select: auto;">메모리 제한</th>
            <th style="width: 17%; user-select: auto;">제출</th>
            <th style="width: 17%; user-select: auto;">정답</th>
            <th style="width: 17%; user-select: auto;">맞은 사람</th>
            <th style="width: 17%; user-select: auto;">정답 비율</th>
                        </tr>
        </thead>
        <tbody style="user-select: auto;">
        <tr style="user-select: auto;">
        <td style="user-select: auto;">1 초 </td>
        <td style="user-select: auto;">128 MB</td>
                            <td style="user-select: auto;">70145</td>
            <td style="user-select: auto;">32273</td>
            <td style="user-select: auto;">25301</td>
            <td style="user-select: auto;">45.248%</td>
                        </tr>
        </tbody>
        </table>
    </div>
</div>
<div id="problem-body" style="user-select: auto;">
    <div class="col-md-12" style="user-select: auto;">
        <section id="description" class="problem-section" style="user-select: auto;">
        <div class="headline" style="user-select: auto;">
        <h2 style="user-select: auto;">문제</h2>
        </div>
        <div id="problem_description" class="problem-text" style="user-select: auto;">
        <p style="user-select: auto;">카지노에서 제일 인기 있는 게임 블랙잭의 규칙은 상당히 쉽다. 카드의 합이 21을 넘지 않는 한도 내에서, 카드의 합을 최대한 크게 만드는 게임이다. 블랙잭은 카지노마다 다양한 규정이 있다.</p>

<p style="user-select: auto;">한국 최고의 블랙잭 고수 김정인은 새로운 블랙잭 규칙을 만들어 상근, 창영이와 게임하려고 한다.</p>

<p style="user-select: auto;">김정인 버전의 블랙잭에서 각 카드에는 양의 정수가 쓰여 있다. 그 다음, 딜러는 N장의 카드를 모두 숫자가 보이도록 바닥에 놓는다. 그런 후에 딜러는 숫자 M을 크게 외친다.</p>

<p style="user-select: auto;">이제 플레이어는 제한된 시간 안에 N장의 카드 중에서 3장의 카드를 골라야 한다. 블랙잭 변형 게임이기 때문에, 플레이어가 고른 카드의 합은 M을 넘지 않으면서 M과&nbsp;최대한 가깝게 만들어야 한다.</p>

<p style="user-select: auto;">N장의 카드에 써져 있는 숫자가 주어졌을 때, M을 넘지 않으면서 M에 최대한 가까운 카드 3장의 합을 구해 출력하시오.</p>

        </div>
        </section>
    </div>
                                <div class="col-md-12" style="user-select: auto;">
            <section id="input" class="problem-section" style="user-select: auto;">
            <div class="headline" style="user-select: auto;">
            <h2 style="user-select: auto;">입력</h2>
            </div>
            <div id="problem_input" class="problem-text" style="user-select: auto;">
            <p style="user-select: auto;">첫째 줄에 카드의 개수 N(3 ≤&nbsp;N ≤&nbsp;100)과 M(10 ≤&nbsp;M ≤&nbsp;300,000)이 주어진다. 둘째 줄에는 카드에 쓰여 있는 수가 주어지며, 이 값은 100,000을 넘지 않는 양의 정수이다.</p>

<p style="user-select: auto;">합이 M을 넘지 않는 카드 3장을 찾을 수 있는 경우만 입력으로 주어진다.</p>

            </div>
            </section>
        </div>

        <div class="col-md-12" style="user-select: auto;">
            <section id="output" class="problem-section" style="user-select: auto;">
            <div class="headline" style="user-select: auto;">
            <h2 style="user-select: auto;">출력</h2>
            </div>
            <div id="problem_output" class="problem-text" style="user-select: auto;">
            <p style="user-select: auto;">첫째 줄에 M을 넘지 않으면서 M에 최대한 가까운 카드 3장의 합을 출력한다.</p>

            </div>
            </section>
        </div>
                <div class="col-md-12" style="user-select: auto;">
    <section id="limit" style="display: none; user-select: auto;" class="problem-section">
    <div class="headline" style="user-select: auto;">
    <h2 style="user-select: auto;">제한</h2>
    </div>
    <div id="problem_limit" class="problem-text" style="user-select: auto;">
                </div>
    </section>
    </div>
                                                            <div class="col-md-12" style="user-select: auto;">
        <div class="row" style="user-select: auto;">
            <div class="col-md-6" style="user-select: auto;">
                <section id="sampleinput1" style="user-select: auto;">
                <div class="headline" style="user-select: auto;">
                <h2 style="user-select: auto;">예제 입력 1
                    <button type="button" class="btn btn-link copy-button" style="padding: 0px; user-select: auto;" data-clipboard-target="#sample-input-1">복사</button>
                </h2>
                </div>
                <pre class="sampledata" id="sample-input-1" style="user-select: auto;">5 21
5 6 7 8 9
</pre>
                </section>
            </div>
            <div class="col-md-6" style="user-select: auto;">
                <section id="sampleoutput1" style="user-select: auto;">
                <div class="headline" style="user-select: auto;">
                <h2 style="user-select: auto;">예제 출력 1
                    <button type="button" class="btn btn-link copy-button" style="padding: 0px; user-select: auto;" data-clipboard-target="#sample-output-1">복사</button>
                </h2>
                </div>
                <pre class="sampledata" id="sample-output-1" style="user-select: auto;">21
</pre>
                </section>
            </div>
                            </div>
        </div>
                        <div class="col-md-12" style="user-select: auto;">
        <div class="row" style="user-select: auto;">
            <div class="col-md-6" style="user-select: auto;">
                <section id="sampleinput2" style="user-select: auto;">
                <div class="headline" style="user-select: auto;">
                <h2 style="user-select: auto;">예제 입력 2
                    <button type="button" class="btn btn-link copy-button" style="padding: 0px; user-select: auto;" data-clipboard-target="#sample-input-2">복사</button>
                </h2>
                </div>
                <pre class="sampledata" id="sample-input-2" style="user-select: auto;">10 500
93 181 245 214 315 36 185 138 216 295
</pre>
                </section>
            </div>
            <div class="col-md-6" style="user-select: auto;">
                <section id="sampleoutput2" style="user-select: auto;">
                <div class="headline" style="user-select: auto;">
                <h2 style="user-select: auto;">예제 출력 2
                    <button type="button" class="btn btn-link copy-button" style="padding: 0px; user-select: auto;" data-clipboard-target="#sample-output-2">복사</button>
                </h2>
                </div>
                <pre class="sampledata" id="sample-output-2" style="user-select: auto;">497
</pre>
                </section>
            </div>
                            </div>
        </div>
                                <div class="col-md-12" style="user-select: auto;">
        <section id="hint" style="display: none; user-select: auto;" class="problem-section">
        <div class="headline" style="user-select: auto;">
        <h2 style="user-select: auto;">힌트</h2>
        </div>
        <div id="problem_hint" class="problem-text" style="user-select: auto;">
        
        </div>
        </section>
    </div>
                    <div style="display: none; user-select: auto;">
            <div id="problem-lang-base64" style="user-select: auto;">W3sicHJvYmxlbV9pZCI6IjI3OTgiLCJwcm9ibGVtX2xhbmciOiIwIiwidGl0bGUiOiJcdWJlMTRcdWI3OTlcdWM3YWQiLCJkZXNjcmlwdGlvbiI6IjxwPlx1Y2U3NFx1YzljMFx1YjE3OFx1YzVkMFx1YzExYyBcdWM4MWNcdWM3N2MgXHVjNzc4XHVhZTMwIFx1Yzc4OFx1YjI5NCBcdWFjOGNcdWM3ODQgXHViZTE0XHViNzk5XHVjN2FkXHVjNzU4IFx1YWRkY1x1Y2U1OVx1Yzc0MCBcdWMwYzFcdWIyZjlcdWQ3ODggXHVjMjdkXHViMmU0LiBcdWNlNzRcdWI0ZGNcdWM3NTggXHVkNTY5XHVjNzc0IDIxXHVjNzQ0IFx1YjExOFx1YzljMCBcdWM1NGFcdWIyOTQgXHVkNTVjXHViM2M0IFx1YjBiNFx1YzVkMFx1YzExYywgXHVjZTc0XHViNGRjXHVjNzU4IFx1ZDU2OVx1Yzc0NCBcdWNkNWNcdWIzMDBcdWQ1NWMgXHVkMDZjXHVhYzhjIFx1YjljY1x1YjRkY1x1YjI5NCBcdWFjOGNcdWM3ODRcdWM3NzRcdWIyZTQuIFx1YmUxNFx1Yjc5OVx1YzdhZFx1Yzc0MCBcdWNlNzRcdWM5YzBcdWIxNzhcdWI5YzhcdWIyZTQgXHViMmU0XHVjNTkxXHVkNTVjIFx1YWRkY1x1YzgxNVx1Yzc3NCBcdWM3ODhcdWIyZTQuPFwvcD5cclxuXHJcbjxwPlx1ZDU1Y1x1YWQ2ZCBcdWNkNWNcdWFjZTBcdWM3NTggXHViZTE0XHViNzk5XHVjN2FkIFx1YWNlMFx1YzIxOCBcdWFlNDBcdWM4MTVcdWM3NzhcdWM3NDAgXHVjMGM4XHViODVjXHVjNmI0IFx1YmUxNFx1Yjc5OVx1YzdhZCBcdWFkZGNcdWNlNTlcdWM3NDQgXHViOWNjXHViNGU0XHVjNWI0IFx1YzBjMVx1YWRmYywgXHVjYzNkXHVjNjAxXHVjNzc0XHVjNjQwIFx1YWM4Y1x1Yzc4NFx1ZDU1OFx1YjgyNFx1YWNlMCBcdWQ1NWNcdWIyZTQuPFwvcD5cclxuXHJcbjxwPlx1YWU0MFx1YzgxNVx1Yzc3OCBcdWJjODRcdWM4MDRcdWM3NTggXHViZTE0XHViNzk5XHVjN2FkXHVjNWQwXHVjMTFjIFx1YWMwMSBcdWNlNzRcdWI0ZGNcdWM1ZDBcdWIyOTQgXHVjNTkxXHVjNzU4IFx1YzgxNVx1YzIxOFx1YWMwMCBcdWM0ZjBcdWM1ZWMgXHVjNzg4XHViMmU0LiBcdWFkZjggXHViMmU0XHVjNzRjLCBcdWI1MWNcdWI3ZWNcdWIyOTQgTlx1YzdhNVx1Yzc1OCBcdWNlNzRcdWI0ZGNcdWI5N2MgXHViYWE4XHViNDUwIFx1YzIyYlx1Yzc5MFx1YWMwMCBcdWJjZjRcdWM3NzRcdWIzYzRcdWI4NWQgXHViYzE0XHViMmU1XHVjNWQwIFx1YjE5M1x1YjI5NFx1YjJlNC4gXHVhZGY4XHViN2YwIFx1ZDZjNFx1YzVkMCBcdWI1MWNcdWI3ZWNcdWIyOTQgXHVjMjJiXHVjNzkwIE1cdWM3NDQgXHVkMDZjXHVhYzhjIFx1YzY3OFx1Y2U1Y1x1YjJlNC48XC9wPlxyXG5cclxuPHA+XHVjNzc0XHVjODFjIFx1ZDUwY1x1YjgwOFx1Yzc3NFx1YzViNFx1YjI5NCBcdWM4MWNcdWQ1NWNcdWI0MWMgXHVjMmRjXHVhYzA0IFx1YzU0OFx1YzVkMCBOXHVjN2E1XHVjNzU4IFx1Y2U3NFx1YjRkYyBcdWM5MTFcdWM1ZDBcdWMxMWMgM1x1YzdhNVx1Yzc1OCBcdWNlNzRcdWI0ZGNcdWI5N2MgXHVhY2U4XHViNzdjXHVjNTdjIFx1ZDU1Y1x1YjJlNC4gXHViZTE0XHViNzk5XHVjN2FkIFx1YmNjMFx1ZDYxNSBcdWFjOGNcdWM3ODRcdWM3NzRcdWFlMzAgXHViNTRjXHViYjM4XHVjNWQwLCBcdWQ1MGNcdWI4MDhcdWM3NzRcdWM1YjRcdWFjMDAgXHVhY2UwXHViOTc4IFx1Y2U3NFx1YjRkY1x1Yzc1OCBcdWQ1NjlcdWM3NDAgTVx1Yzc0NCBcdWIxMThcdWM5YzAgXHVjNTRhXHVjNzNjXHViYTc0XHVjMTFjIE1cdWFjZmMmbmJzcDtcdWNkNWNcdWIzMDBcdWQ1NWMgXHVhYzAwXHVhZTVkXHVhYzhjIFx1YjljY1x1YjRlNFx1YzViNFx1YzU3YyBcdWQ1NWNcdWIyZTQuPFwvcD5cclxuXHJcbjxwPk5cdWM3YTVcdWM3NTggXHVjZTc0XHViNGRjXHVjNWQwIFx1YzM2OFx1YzgzOCBcdWM3ODhcdWIyOTQgXHVjMjJiXHVjNzkwXHVhYzAwIFx1YzhmY1x1YzViNFx1Yzg0Y1x1Yzc0NCBcdWI1NGMsIE1cdWM3NDQgXHViMTE4XHVjOWMwIFx1YzU0YVx1YzczY1x1YmE3NFx1YzExYyBNXHVjNWQwIFx1Y2Q1Y1x1YjMwMFx1ZDU1YyBcdWFjMDBcdWFlNGNcdWM2YjQgXHVjZTc0XHViNGRjIDNcdWM3YTVcdWM3NTggXHVkNTY5XHVjNzQ0IFx1YWQ2Y1x1ZDU3NCBcdWNkOWNcdWI4MjVcdWQ1NThcdWMyZGNcdWM2MjQuPFwvcD5cclxuIiwiaW5wdXQiOiI8cD5cdWNjYWJcdWM5ZjggXHVjOTA0XHVjNWQwIFx1Y2U3NFx1YjRkY1x1Yzc1OCBcdWFjMWNcdWMyMTggTigzICZsZTsmbmJzcDtOICZsZTsmbmJzcDsxMDApXHVhY2ZjIE0oMTAgJmxlOyZuYnNwO00gJmxlOyZuYnNwOzMwMCwwMDApXHVjNzc0IFx1YzhmY1x1YzViNFx1YzljNFx1YjJlNC4gXHViNDU4XHVjOWY4IFx1YzkwNFx1YzVkMFx1YjI5NCBcdWNlNzRcdWI0ZGNcdWM1ZDAgXHVjNGYwXHVjNWVjIFx1Yzc4OFx1YjI5NCBcdWMyMThcdWFjMDAgXHVjOGZjXHVjNWI0XHVjOWMwXHViYTcwLCBcdWM3NzQgXHVhYzEyXHVjNzQwIDEwMCwwMDBcdWM3NDQgXHViMTE4XHVjOWMwIFx1YzU0YVx1YjI5NCBcdWM1OTFcdWM3NTggXHVjODE1XHVjMjE4XHVjNzc0XHViMmU0LjxcL3A+XHJcblxyXG48cD5cdWQ1NjlcdWM3NzQgTVx1Yzc0NCBcdWIxMThcdWM5YzAgXHVjNTRhXHViMjk0IFx1Y2U3NFx1YjRkYyAzXHVjN2E1XHVjNzQ0IFx1Y2MzZVx1Yzc0NCBcdWMyMTggXHVjNzg4XHViMjk0IFx1YWNiZFx1YzZiMFx1YjljYyBcdWM3ODVcdWI4MjVcdWM3M2NcdWI4NWMgXHVjOGZjXHVjNWI0XHVjOWM0XHViMmU0LjxcL3A+XHJcbiIsIm91dHB1dCI6IjxwPlx1Y2NhYlx1YzlmOCBcdWM5MDRcdWM1ZDAgTVx1Yzc0NCBcdWIxMThcdWM5YzAgXHVjNTRhXHVjNzNjXHViYTc0XHVjMTFjIE1cdWM1ZDAgXHVjZDVjXHViMzAwXHVkNTVjIFx1YWMwMFx1YWU0Y1x1YzZiNCBcdWNlNzRcdWI0ZGMgM1x1YzdhNVx1Yzc1OCBcdWQ1NjlcdWM3NDQgXHVjZDljXHViODI1XHVkNTVjXHViMmU0LjxcL3A+XHJcbiIsImhpbnQiOiIiLCJvcmlnaW5hbCI6IjAiLCJodG1sX3RpdGxlIjoiMCIsInByb2JsZW1fbGFuZ190Y29kZSI6IktvcmVhbiJ9LHsicHJvYmxlbV9pZCI6IjI3OTgiLCJwcm9ibGVtX2xhbmciOiIxIiwidGl0bGUiOiJKQUNLIiwiZGVzY3JpcHRpb24iOiI8cD5JbiAmbGRxdW87QmxhY2tqYWNrJnJkcXVvOywgYSBwb3B1bGFyIGNhcmQgZ2FtZSwgdGhlIGdvYWwgaXMgdG8gaGF2ZSBjYXJkcyB3aGljaCBzdW0gdXAgdG8gbGFyZ2VzdCBudW1iZXIgbm90IGV4Y2VlZGluZyAyMS4gTWlya28gY2FtZSB1cCB3aXRoIGhpcyBvd24gdmVyc2lvbiBvZiB0aGlzIGdhbWUuPFwvcD5cclxuXHJcbjxwPkluIE1pcmtvXHUyMDFmcyBnYW1lLCBjYXJkcyBoYXZlIHBvc2l0aXZlIGludGVnZXJzIHdyaXR0ZW4gb24gdGhlbS4gVGhlIHBsYXllciBpcyBnaXZlbiBhIHNldCBvZiBjYXJkcyBhbmQgYW4gaW50ZWdlciBNLiBIZSBtdXN0IGNob29zZSB0aHJlZSBjYXJkcyBmcm9tIHRoaXMgc2V0IHNvIHRoYXQgdGhlaXIgc3VtIGNvbWVzIGFzIGNsb3NlIGFzIHBvc3NpYmxlIHRvIE0gd2l0aG91dCBleGNlZWRpbmcgaXQuIFRoaXMgaXMgbm90IGFsd2F5cyBlYXN5IHNpbmNlIHRoZXJlIGNhbiBiZSBhIGh1bmRyZWQgb2YgY2FyZHMgaW4gdGhlIGdpdmVuIHNldC48XC9wPlxyXG5cclxuPHA+SGVscCBNaXJrbyBieSB3cml0aW5nIGEgcHJvZ3JhbSB0aGF0IGZpbmRzIHRoZSBiZXN0IHBvc3NpYmxlIG91dGNvbWUgb2YgZ2l2ZW4gZ2FtZS48XC9wPlxyXG4iLCJpbnB1dCI6IjxwPlRoZSBmaXJzdCBsaW5lIG9mIGlucHV0IGNvbnRhaW5zIGFuIGludGVnZXIgTiAoMyAmbGU7IE4gJmxlOyAxMDApLCB0aGUgbnVtYmVyIG9mIGNhcmRzLCBhbmQgTSAoMTAgJmxlOyBNICZsZTsgMzAwIDAwMCksIHRoZSBudW1iZXIgdGhhdCB3ZSBtdXN0IG5vdCBleGNlZWQuPFwvcD5cclxuXHJcbjxwPlRoZSBmb2xsb3dpbmcgbGluZSBjb250YWlucyBudW1iZXJzIHdyaXR0ZW4gb24gTWlya29cdTIwMWZzIGNhcmRzOiBOIGRpc3RpbmN0IHNwYWNlLXNlcGFyYXRlZCBwb3NpdGl2ZSBpbnRlZ2VycyBsZXNzIHRoYW4gMTAwIDAwMC48XC9wPlxyXG5cclxuPHA+VGhlcmUgd2lsbCBhbHdheXMgZXhpc3Qgc29tZSB0aHJlZSBjYXJkcyB3aG9zZSBzdW0gaXMgbm90IGdyZWF0ZXIgdGhhbiBNLjxcL3A+XHJcbiIsIm91dHB1dCI6IjxwPlRoZSBmaXJzdCBhbmQgb25seSBsaW5lIG9mIG91dHB1dCBzaG91bGQgY29udGFpbiB0aGUgbGFyZ2VzdCBwb3NzaWJsZSBzdW0gd2UgY2FuIG9idGFpbi48XC9wPlxyXG5cclxuPHA+Jm5ic3A7PFwvcD5cclxuIiwiaGludCI6IiIsIm9yaWdpbmFsIjoiMSIsImh0bWxfdGl0bGUiOiIwIiwicHJvYmxlbV9sYW5nX3Rjb2RlIjoiRW5nbGlzaCJ9XQ==</div>
        </div>
                        </div>
                            <div class="col-md-12" style="user-select: auto;"><section id="source" style="user-select: auto;"><div class="headline" style="user-select: auto;"><h2 style="user-select: auto;">출처</h2></div><p style="user-select: auto;"><a href="/category/45" style="user-select: auto;">Contest</a>&nbsp;&gt;&nbsp;<a href="/category/17" style="user-select: auto;">Croatian Open Competition in Informatics</a>&nbsp;&gt;&nbsp;<a href="/category/19" style="user-select: auto;">COCI 2011/2012</a>&nbsp;&gt;&nbsp;<a href="/category/detail/73" style="user-select: auto;">Contest #6</a>&nbsp;1번</p><ul style="user-select: auto;"><li style="user-select: auto;">문제를 번역한 사람:&nbsp;<a href="/user/baekjoon" style="user-select: auto;">baekjoon</a></li><li style="user-select: auto;">빠진 조건을 찾은 사람:&nbsp;<a href="/user/bupjae" style="user-select: auto;">bupjae</a></li><li style="user-select: auto;">문제의 오타를 찾은 사람:&nbsp;<a href="/user/eric00513" style="user-select: auto;">eric00513</a>,&nbsp;<a href="/user/joonas" style="user-select: auto;">joonas</a>,&nbsp;<a href="/user/otter66" style="user-select: auto;">otter66</a></li></ul></section></div>
                                                                                                    </div>
`;
