<script>
	import { 
    Container, 
    Row,
    Col
  } from 'sveltestrap';
</script>

<Container fluid>
    <Row>
      <Col lg={4}>
        <slot name="tutorial" />
      </Col> 
      <Col lg={4}>
        <slot name="inputs" />
      </Col>
      <Col lg={4}>
        <slot name="results" />
      </Col>
    </Row>
</Container>