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
    use "AjaxController"

    <Use Method Chaining>
        Get "AjaxController.sendGet(remoteUrl, function(responseText){...code})"
        Post "AjaxController.sendPost(remoteUrl, query, function(responseText){...code})"
        PostFormData : "AjaxController.sendPostFormData(remoteUrl, query, function(responseText){...code})"

        <Recieve Response>
        callback 함수에서 파라미터 파싱(JSON.parse)

    <Use Await Async>
        Get : "await AjaxController.sendGetAsync(remoteUrl)"
        Post : "await AjaxController.sendPostAsync(remoteUrl, '파라미터 문자열')" ex)test=1&test=2....
        Json : "await AjaxController.sendJsonAsync(remoteUrl, '직렬화된 JSON')" ex)JSON.stringify()
        PostFormData : "await AjaxController.sendPostFormDataAsync(remoteUrl, FormData)" ex)FormData 객체
        Object : "await AjaxController.sendObjectAsync(remoteUrl, Object)" ex)Object 객체
        Fetch : "await AjaxController.sendFetchAsync(remoteUrl)" ex)원격URL 이미지 또는 파일 받을때 사용

        <Recieve Response>
        ex)
        const response = await AjaxController.sendPostAsync("url", query);
        let data = JSON.parse(response.responseText);