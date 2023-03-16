from kafka import KafkaProducer

try:
    productor = KafkaProducer(bootstrap_servers='localhost:9092', retries=5, retry_backoff_ms=100)

    lista_frutas = ['manzana', 'pera', 'uva']

    for fruta in lista_frutas:
        productor.send('topico_frutas', bytes(fruta, 'utf-8'))

    productor.flush()
    productor.close()
except Exception as error:
    print(f"Error con Apache Kafka: {error}")