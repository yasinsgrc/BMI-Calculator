import React,{useState}from "react";
import "../App.css";
import {
  Container,
  Row,
  Col,
  Card,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import styled from 'styled-components'
import {useHistory} from "react-router-dom";



const Button = styled.button`
background-color:white;
color:purple;
font-size: 1em;
margin-top:2px;
font-weight:bold;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 5px;
`;


export default function BmiCalculator() {
    let history = useHistory();

  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();

  const handleClick = (e) =>{

   // e.preventDefault();
    var boy = parseInt(height);
    var kilo = parseInt(weight);

    localStorage.setItem("boy",boy);
    localStorage.setItem("kilo",kilo);

    boy=boy/100;

    const bmi=(kilo/(boy*boy)).toFixed(2);

    if(!isNaN(bmi)){    
        localStorage.setItem("bmi",bmi);
        history.push("/detail");
    }
    else
    alert("Ooopps!!! Lütfen değerleri kontrol ediniz. ")

  }

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card
              bg={"dark"}
              key={8}
              text={"white"}
              style={{ width: "40rem"}}
              className="calculate"
            >
              <Card.Header>BMI(Vücut Kitle İndeksi) Hesaplayıcı</Card.Header>
              <Card.Body>
                <Card.Title>BMI Nedir?</Card.Title>
                <Card.Text>
                  Kısaca kilonuzun, boyunuzun karesine bölümüdür. Çıkan sonuçla
                  ideal kiloda olup olmadığınızı anlayabilir ya da ne durumda
                  olduğunuzu görebilirsiniz.
                </Card.Text>
                <Row>
                  <Col>
                    <InputGroup className="mb-3" style={{ width: "12rem" }}>
                      <InputGroup.Text id="inputGroup-sizing-default">
                        Boy
                      </InputGroup.Text>
                      <FormControl
                        value={height}
                        onChange={(e)=>setHeight(e.target.value)}
                        placeholder="Örn: 172"
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                      />
                    </InputGroup>
                  </Col>
                  <Col>
                    <InputGroup className="mb-3" style={{ width: "12rem" }}>
                      <InputGroup.Text id="inputGroup-sizing-default">
                        Kilo
                      </InputGroup.Text>
                      <FormControl
                      value={weight}
                        onChange={(e)=>setWeight(e.target.value)}
                        placeholder="Örn: 65"
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                      />
                    </InputGroup>
                  </Col>
                  <Col>
                  <Button onClick={handleClick}>Hesapla</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
