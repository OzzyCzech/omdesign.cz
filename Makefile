screenshots:
	node screenshot.js https://www.testomato.com ./public/img/work/testomato.png
	node screenshot.js https://www.zdrojak.cz ./public/img/work/zdrojak.png
	node screenshot.js https://www.sphido.org ./public/img/work/sphido.png

github:
	#curl --silent https://api.stackexchange.com/2.2/users/355316?order=desc&sort=reputation&site=stackoverflow data/stackoverflow.json
	curl --silent "https://api.github.com/users/OzzyCzech/repos?per_page=999" -o data/github.json

resume:
	rm -rf public/cv.pdf && node resume.js && open public/cv.pdf

clean:
	rm -rf node_modules
	rm -rf public/*
	rm -rf yarn.lock
	rm -rf .next

.PHONY: screenshots resume clean repos
