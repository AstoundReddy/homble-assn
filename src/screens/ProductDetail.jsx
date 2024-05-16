import { useState } from "react";
import { Container, Row, Col, Image, Collapse } from "react-bootstrap";
import { useProductAPI } from "../hooks/useProductApi";
import { useParams } from "react-router-dom";
import loading from "../assets/svgs/loading.svg";

function ProductDetail() {
  const [openDesc, setOpenDesc] = useState(false);
  const [openAllergen, setOpenAllergen] = useState(false);
  const [openUsage, setOpenUsage] = useState(false);
  const { id } = useParams();
  const { product, getloading } = useProductAPI(id);
  return (
    <Container className="p-2">
      {getloading && (
        <div className=" d-flex flex-row justify-content-center">
          <img src={loading} alt="loading" />
        </div>
      )}
      <Row className="justify-content-md-center bg-secondary-subtle ">
        <Col md className="align-content-center">
          <div className="d-flex justify-content-center ">
            <Image className="p-2" src={product?.productImage} alt={product?.name} fluid rounded />
          </div>
        </Col>
        <Col md lg="6" className="py-2">
          <h2 className="text-center my-4">{product?.name}</h2>
          <p className="text-center h4">
            <strong>Cost Price: </strong>₹{product?.cost_price}
          </p>
          <p className="text-center h4">
            <strong>Selling Price: </strong>₹{product?.selling_price}
          </p>

          <div>
            <div style={{ cursor: "pointer" }} onClick={() => setOpenDesc(!openDesc)} className="d-flex bg-light mt-3">
              <div className="align-middle p-2">
                {openDesc ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                  </svg>
                )}
              </div>
              <div className="align-middle fw-bold p-2 px-1">Description</div>
            </div>
            <Collapse className="bg-info-subtle p-2" in={openDesc}>
              <div>{product?.description}</div>
            </Collapse>
          </div>

          <div>
            <div style={{ cursor: "pointer" }} onClick={() => setOpenAllergen(!openAllergen)} className="d-flex bg-light mt-3">
              <div className="align-middle p-2">
                {openAllergen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                  </svg>
                )}
              </div>
              <div className="align-middle fw-bold p-2 px-1">Allergen Info</div>
            </div>
            <Collapse className="bg-info-subtle p-2" in={openAllergen}>
              <div>{product?.allergen_info}</div>
            </Collapse>
          </div>

          <div>
            <div style={{ cursor: "pointer" }} onClick={() => setOpenUsage(!openUsage)} className="d-flex bg-light mt-3">
              <div className="align-middle p-2">
                {openUsage ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                  </svg>
                )}
              </div>
              <div className="align-middle fw-bold p-2 px-1">Usage</div>
            </div>
            <Collapse className="bg-info-subtle p-2" in={openUsage}>
              <div>{product?.cooking_instruction}</div>
            </Collapse>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
