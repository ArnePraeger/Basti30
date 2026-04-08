param(
  [int]$Port = 8080
)

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location -LiteralPath $projectRoot

$cacheBuster = [DateTimeOffset]::UtcNow.ToUnixTimeSeconds()
$url = "http://localhost:$Port/index.html?v=$cacheBuster"

Write-Host "Starte lokalen Server auf http://localhost:$Port ..."
Write-Host "Oeffne $url (Cache-Buster aktiv)"
Start-Process $url

try {
  py -m http.server $Port
} catch {
  python -m http.server $Port
}
