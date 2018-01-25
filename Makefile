chrome = /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --headless --disable-gpu --window-size=1920,1428

screenshots:
	$(chrome) --screenshot="./static/img/work/testomato.png" https://www.testomato.com
	$(chrome) --screenshot="./static/img/work/zdrojak.png" https://www.zdrojak.cz
	$(chrome) --screenshot="./static/img/work/sphido.png" https://www.sphido.org

resume:
	$(chrome) --print-to-pdf="./static/cv.pdf" http://localhost:3000/resume

.PHONY: screenshots resume
