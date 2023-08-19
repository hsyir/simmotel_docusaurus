---

---
# Voicemail Edit

از این سرویس برای ویرایش صندوق صوتی استفاده می‌شود.

## پارامتر‌ها
|                    توضیحات                    | داده های تعریف شده |      داده های نمونه      | پارامترهای ضروری[**]/منطقی[*] |       پارامترها       |
|:---------------------------------------------:|:------------------:|:------------------------:|:----------------------:|:---------------------:|
| شناسه یکتای صندوق صوتی که از [جستجو](/docs/api/callcenter_api/SimoTelAPI/voicemail/voicemail_search) بدست می‌‌‌آید |          -         | 6033876dc92de036d1390923 |           **           |          id_          |
|                 نام صندوق‌صوتی                 |          -         |      test voicemail      |            *           |          name         |
|                شماره‌ صندوق‌صوتی                |          -         |          999999          |            *           |         number        |
|                    رمزعبور                    |          -         |          999999          |            *           |        password       |
|                   آدرس‌ایمیل                   |          -         |             -            |                        |         email         |
|                 درخواست پسورد                 |       yes/no       |            no            |            *           |   required_password   |
|                       -                       |       yes/no       |            no            |            *           | allow_change_password |
|                  وضعیت ارسال ایمیل                  |       yes/no       |            no            |            *           |       send_email      |
|            افزودن فایل‌صوتی به ایمیل           |       yes/no       |            no            |            *           |   attach_file_email   |
|                       -                       |       yes/no       |            no            |            *           |       play_busy       |
|                       -                       |       yes/no       |            no            |            *           |    play_unavailable   |
|                       -                       |       yes/no       |            no            |            *           |      play_welcome     |
|                       -                       |       yes/no       |            no            |            *           |        Play_CID       |
|                       -                       |       yes/no       |            no            |            *           |     Play_Envelope     |
|                       -                       |       yes/no       |            no            |            *           |    Delete_Voicemail   |
|                       -                       |       yes/no       |            no            |            *           |      more_options     |

## نمونه خروجی درخواست

```shell
{
    "success": 1,
    "message": "Requested operation is done successfully",
    "data": "",
    "old": null
}
```



## نمونه فراخوانی

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
   className="unique-tabs" 
    defaultValue="PHP"
    values={[
        {label: 'PHP', value: 'PHP'},
        {label: 'JS', value: 'JS'},
		{label: 'Linux', value: 'Linux'},
    ]}>
<TabItem value="PHP">

	<?php

	$curl = curl_init();

	curl_setopt_array($curl, array(
	  CURLOPT_URL => 'http://192.168.51.21//api/v3/voicemails/voicemails',
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => '',
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => 'PUT',
	  CURLOPT_POSTFIELDS =>'{
		"_id":"6033876dc92de036d1390923",
		"name":"test voicemail",
		"number":"999999",
		"password":"999999",
		"email":"",
		"required_password":"no",
		"allow_change_password":"no",
		"send_email":"no",
		"attach_file_email":"no",
		"play_busy":"no",
		"play_unavailable":"no",
		"play_welcome":"no",
		"Play_CID":"no",
		"Play_Envelope":"no",
		"Delete_Voicemail":"no",
		"more_options":""
	}',
	  CURLOPT_HTTPHEADER => array(
		'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG',
		'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==',
		'Content-Type: application/json'
	  ),
	));


	$response = curl_exec($curl);

		if (!curl_errno($curl)) {
		$httpcode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
		echo 'response code:'.$httpcode, '<br/>';
	}

	curl_close($curl);
	echo $response;


</TabItem>
<TabItem value="JS">

	<html>
		<head>
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
		</head>
		<body>
			<script>
				var settings = {
				  "url": "http://192.168.51.21//api/v3/voicemails/voicemails",
				  "method": "PUT",
				  "timeout": 0,
				  "headers": {
					"X-APIKEY": "vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",
					"Authorization": "Basic dGVzdDpBYTEyMzQ1Ng==",
					"Content-Type": "application/json"
				  },
				  "data": JSON.stringify({
					  "_id": "6033876dc92de036d1390923",
					  "name": "test voicemail",
					  "number": "999999",
					  "password": "999999",
					  "email": "",
					  "required_password": "no",
					  "allow_change_password": "no",
					  "send_email": "no",
					  "attach_file_email": "no",
					  "play_busy": "no",
					  "play_unavailable": "no",
					  "play_welcome": "no",
					  "Play_CID": "no",
					  "Play_Envelope": "no",
					  "Delete_Voicemail": "no",
					  "more_options": ""
					}),
				};
					$.ajax(settings).always(function (jqXHR) {
						console.log("response code: " + jqXHR.status + " " + jqXHR.statusText);
						console.log("response body: " + jqXHR.responseText);
					});
			</script>
		</body>
	</html>


</TabItem>
<TabItem value="Linux">

	curl --location --request PUT 'http://192.168.51.21//api/v3/voicemails/voicemails' \
	--header 'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG' \
	--header 'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"_id":"6033876dc92de036d1390923",
		"name":"test voicemail",
		"number":"999999",
		"password":"999999",
		"email":"",
		"required_password":"no",
		"allow_change_password":"no",
		"send_email":"no",
		"attach_file_email":"no",
		"play_busy":"no",
		"play_unavailable":"no",
		"play_welcome":"no",
		"Play_CID":"no",
		"Play_Envelope":"no",
		"Delete_Voicemail":"no",
		"more_options":""
	}'
</TabItem>
</Tabs>
