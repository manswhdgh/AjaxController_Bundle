--Description--
AJAX XMLHttpRequest Library

--Environment--
Node Version : 20.12.2
Npm(Npx) Version : 10.5.0
TypeScript Version : 5.4.5
TypeScript Node Version : 10.9.2
OS : Window11 23H2(22631.3447)

--Prerequisite--
include package.json
npm install

--Usage--
    use "AjaxClientAsync"

    <Use Method Chaining>
        Get "AjaxClientAsync.sendGet(remoteUrl, function(responseText){...code})"
        Post "AjaxClientAsync.sendPost(remoteUrl, query, function(responseText){...code})"
        PostFormData : "AjaxClientAsync.sendPostFormData(remoteUrl, query, function(responseText){...code})"

        <Recieve Response>
        callback 함수에서 파라미터 파싱(JSON.parse)

    <Use Await Async>
        Get : "await AjaxClientAsync.sendGetAsync(remoteUrl)"
        Post : "await AjaxClientAsync.sendPostAsync(remoteUrl, '파라미터 문자열')" ex)test=1&test=2....
        Json : "await AjaxClientAsync.sendJsonAsync(remoteUrl, '직렬화된 JSON')" ex)JSON.stringify()
        PostFormData : "await AjaxClientAsync.sendPostFormDataAsync(remoteUrl, FormData)" ex)FormData 객체
        Object : "await AjaxClientAsync.sendObjectAsync(remoteUrl, Object)" ex)Object 객체
        Fetch : "await AjaxClientAsync.sendFetchAsync(remoteUrl)" ex)원격URL 이미지 또는 파일 받을때 사용

        <Recieve Response>
        ex)
        const response = await AjaxClientAsync.sendPostAsync("url", query);
        let data = JSON.parse(response.responseText);