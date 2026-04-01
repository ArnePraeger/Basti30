param(
  [int]$Port = 8080
)

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location -LiteralPath $projectRoot

Write-Host "Starte lokalen Server auf http://localhost:$Port ..."
Start-Process "http://localhost:$Port/index.html"

try {
  py -m http.server $Port
} catch {
  python -m http.server $Port
}
