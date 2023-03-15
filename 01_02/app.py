from kafka.admin import KafkaAdminClient
from kafka.errors import UnknownTopicOrPartitionError

cliente_kafka = KafkaAdminClient(bootstrap_servers="localhost:9092")
topico_eliminar = "python_topic"

try:
    cliente_kafka.delete_topics(topics=[topico_eliminar])
    print(f"El tópico {topico_eliminar} ha sido eliminado exitosamente.")    
except UnknownTopicOrPartitionError:
    print(f"Error al eliminar el tópico {topico_eliminar}")