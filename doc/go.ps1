$node_path=pwd
$env:GOROOT=-Join("$node_path","tools\go")
$env:GOPATH=-Join("$node_path","tools\gosrc")
$env:path=-Join("$node_path","tools\go\bin;")+-Join("$node_path","tools\gosrc\bin;")+$env:path
$env:GOPROXY="https://mirrors.aliyun.com/goproxy/"
powershell