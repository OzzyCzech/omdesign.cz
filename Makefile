screenshots:
	node screenshot.js https://www.testomato.com ./static/img/work/testomato.png
	node screenshot.js https://www.zdrojak.cz ./static/img/work/zdrojak.png
	node screenshot.js https://www.sphido.org ./static/img/work/sphido.png

resume:
	rm -rf static/cv.pdf && node resume.js && open static/cv.pdf

clean:
	rm -rf node_modules
	rm -rf public/*
	rm -rf .next

.PHONY: start screenshots resume clean
