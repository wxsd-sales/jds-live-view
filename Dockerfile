#docker build -t jds-standalone-webpage .
#docker run -i -t jds-standalone-webpage

#aws ecr get-login-password --region us-west-1 | docker login --username AWS --password-stdin 191518685251.dkr.ecr.us-west-1.amazonaws.com
#docker tag jds-standalone-webpage:latest 191518685251.dkr.ecr.us-west-1.amazonaws.com/jds-standalone-webpage:latest
#docker push 191518685251.dkr.ecr.us-west-1.amazonaws.com/jds-standalone-webpage:latest

#I think this only has to be done 1 time.
#aws ecr create-repository --repository-name jds-standalone-webpage

#aws eks --region us-west-1 update-kubeconfig --name bdm-cluster
#kubectl cluster-info

#kubectl apply -f jds-standalone-webpage.yaml
#kubectl get ingress -n jds-standalone-webpage

#kubectl get pods
#kubectl describe pod <pod name>

FROM node:16.9

WORKDIR /app
COPY package*.json ./
RUN npm --force install
COPY . .

#overwrite default environment variables
COPY prod.env .env
# EXPOSE 10020
CMD [ "npm", "start" ]
