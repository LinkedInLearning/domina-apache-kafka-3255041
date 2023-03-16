from kafka import KafkaAdminClient

cliente_kafka = KafkaAdminClient(bootstrap_servers='localhost:9092')
lista_topicos = cliente_kafka.list_topics()

for topico in lista_topicos:
    print(topico)