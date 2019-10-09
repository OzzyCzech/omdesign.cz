screenshots:
	node screenshot.js https://www.testomato.com ./public/img/work/testomato.png
	node screenshot.js https://www.zdrojak.cz ./public/img/work/zdrojak.png
	node screenshot.js https://www.sphido.org ./public/img/work/sphido.png

resume:
	rm -rf public/cv.pdf && node resume.js && open public/cv.pdf

clean:
	rm -rf node_modules
	rm -rf public/*
	rm -rf yarn.lock
	rm -rf .next

.PHONY: screenshots resume clean
