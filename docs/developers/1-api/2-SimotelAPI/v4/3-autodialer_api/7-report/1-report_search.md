---

---
# Report Search

این سرویس در جستجوی گزارشات مربوط به کمپین کاربرد دارد.

## پارامتر‌ها
|        توضیحات        | داده های تعریف شده |      داده های نمونه     | پارامترهای ضروری[**]/منطقی[*] |        پارامترها        |
|:---------------------:|:------------------:|:-----------------------:|:----------------------:|:-----------------------:|
|   یافتن موارد مشابه   |     true/false     |           true          |           **           |          alike          |
|           -           |          -         |            0            |                        |    pagination->start    |
|           -           |          -         |            20           |                        |    pagination->count    |
|           -           |          -         |            {}           |                        |   pagination->sorting   |
| جستجوی کمپین از تاریخ |          -         |     2020-12-26 15:29    |                        |     date_range->from    |
| جستجوی کمپین تا تاریخ |          -         |     2022-12-26 15:29    |                        |      date_range->to     |
|       وضعیت تماس      |          -         |           LOST          |                        | conditions->disposition |
|   شناسه یکتای کمپین   |          -         | 60c74cec7d2c21279a29b4e |                        | conditions->campaign_id |
|   جستجو براساس شماره  |          -         |       09376131239       |                        |    conditions->number   |


## نمونه فراخوانی

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
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
	  CURLOPT_URL => 'http://192.168.51.20/api/v4/autodialer/reports/search',
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => '',
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => 'POST',
	  CURLOPT_POSTFIELDS =>'{
		"alike":"true",
		"pagination":{"start":0,"count":20,"sorting":{}},
		"date_range":{"from":"2020-12-26 15:29","to":"2022-12-28 15:29"},
		"conditions":{
			"disposition":"",
			"campaign_id":"60c74cec7d2c21279a295b4e",
			"number":"09376131239"}
	}',
	  CURLOPT_HTTPHEADER => array(
		'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG',
		'Authorization: Basic c2FkcjpTYWRyQDEyMw==',
		'Content-Type: application/json'
	  ),
	));

	$response = curl_exec($curl);

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
				  "url": "http://192.168.51.20/api/v4/autodialer/reports/search",
				  "method": "POST",
				  "timeout": 0,
				  "headers": {
					"X-APIKEY": "9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG",
					"Authorization": "Basic c2FkcjpTYWRyQDEyMw==",
					"Content-Type": "application/json"
				  },
				  "data": JSON.stringify({
					"alike": "true",
					"pagination": {
					  "start": 0,
					  "count": 20,
					  "sorting": {}
					},
					"date_range": {
					  "from": "2020-12-26 15:29",
					  "to": "2022-12-28 15:29"
					},
					"conditions": {
					  "disposition": "",
					  "campaign_id": "60c74cec7d2c21279a295b4e",
					  "number": "09376131239"
					}
				  }),
				};

				$.ajax(settings).done(function (response) {
				  console.log(response);
				});
			</script>
		</body>
	</html>
	

</TabItem>
<TabItem value="Linux">

	curl --location --request POST 'http://192.168.51.20/api/v4/autodialer/reports/search' \
	--header 'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG' \
	--header 'Authorization: Basic c2FkcjpTYWRyQDEyMw==' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"alike":"true",
		"pagination":{"start":0,"count":20,"sorting":{}},
		"date_range":{"from":"2020-12-26 15:29","to":"2022-12-28 15:29"},
		"conditions":{
			"disposition":"",
			"campaign_id":"60c74cec7d2c21279a295b4e",
			"number":"09376131239"}
	}'
	
</TabItem>
</Tabs>

## نمونه خروجی درخواست

```shell
{
    "success": 1,
    "message": "",
    "data": {
        "pagination": {
            "start": 0,
            "count": 20,
            "sorting": {
                "date": -1
            },
            "total": 1
        },
        "data": [
            {
                "_id": "60c74f8b00035c9848c6fd5b",
                "start": "1399-12-01 15:17:00",
                "end": "1400-12-04 15:17:00",
                "date": "1400-03-24 12:46:03",
                "campaign_id": {
                    "$oid": "60c74cec7d2c21279a295b4e"
                },
                "campaign": "test1111api",
                "interface_context": "",
                "interface_text": "",
                "trunk_manager_id": {
                    "$oid": "5f7586bcce4f6d03da37cf17"
                },
                "announcement": "5f3ce4f1ce4f6d20217c8830",
                "number": "09376131239",
                "disposition": "LOST",
                "try": 1,
                "repeat": 1,
                "status": "in-process",
                "billsec": 0,
                "wait": 0,
                "input": "",
                "tries": [
                    {
                        "cdr_id": {
                            "$oid": "60c74f8b00035c9848c6fd5a"
                        },
                        "cause": null,
                        "cause-txt": null,
                        "starttime": {
                            "$date": {
                                "$numberLong": "1623658563809"
                            }
                        },
                        "disposition": "LOST",
                        "wait": 0
                    }
                ],
                "LOST": 1,
                "billsec_hhmmss": "00:00:00",
                "wait_hhmmss": "00:00:00"
            }
        ]
    }
}
```