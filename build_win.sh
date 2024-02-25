.venv\scripts\activate 
pip install --upgrade pip
pip install -r requirements.txt
reflex init 
reflex export  --frontend-only 
Remove-Item public -Recurse -Force
Expand-Archive -LiteralPath "frontend.zip" -DestinationPath "public"
Remove-Item -Path "frontend.zip"