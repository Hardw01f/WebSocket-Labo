
FROM centos/nodejs-10-centos7

ENV container docker_node

USER root

WORKDIR /ws

RUN yum update -y && yum install -y \
	vim \
	less \
	git  

EXPOSE 3000

