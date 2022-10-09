FROM node:18-bullseye-slim

RUN apt update && apt install -y wget netcat git

#usuario root
RUN wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for

# RUN apt install --no-cache bash

USER node

WORKDIR /home/node/app

CMD [ "/home/node/app/.docker/entrypoint.sh" ]