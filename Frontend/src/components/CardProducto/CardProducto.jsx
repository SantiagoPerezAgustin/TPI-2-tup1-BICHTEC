import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardProducto({producto}) {
  return (
    <Card style={{ width: '18rem', minHeight: '220px', maxHeight: '360px' }}>
      <Card.Img
        variant="top"
        src={producto.imagenUrl}
        style={{ height: '180px', objectFit: 'contain', backgroundColor: '#fff', marginBottom: '0.5rem' }}
      />
      <Card.Body
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          height: 'calc(420px - 180px)',
          paddingTop: 0,
          paddingBottom: 0
        }}
      >
        <div>
          <Card.Title
            className="text-center"
            style={{ fontWeight: 'bold', fontSize: '1.3rem', marginBottom: '0.25rem' }}
          >
            {producto.nombre}
          </Card.Title>
          <div className="text-center" style={{ marginBottom: '0.5rem' }}>
            <span
              style={{
                color: '#198754',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                background: '#e9fbe7',
                borderRadius: '8px',
                padding: '0.25rem 0.75rem'
              }}
            >
              ${producto.precio}
            </span>
          </div>
        </div>
        <div className="d-flex justify-content-center gap-2 mt-3 mb-2">
          <Button variant="success">Comprar +</Button>
          <Button variant="dark">Ver detalle</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardProducto;