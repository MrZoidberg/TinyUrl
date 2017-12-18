build:
#	@docker-compose -f docker-compose -p tinyurl build
	@docker-compose -f docker-compose.yaml -p tinyurl build
run:
	@docker-compose -f docker-compose.yaml -p tinyurl up
