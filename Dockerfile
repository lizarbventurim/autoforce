FROM cypress/included:14.0.2

RUN apt-get update && apt-get install -y xvfb

ENTRYPOINT ["xvfb-run", "--", "cypress", "run", "--env", "allure=true"]