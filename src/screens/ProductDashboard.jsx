import React, { useState, useEffect, useMemo } from "react";
import { Container, Table } from "react-bootstrap";
import { useDashboardApi } from "../hooks/useDashboardApi";
import sort from "../assets/svgs/sort.svg";
import loadingsvg from "../assets/svgs/loading.svg";
function ProductDashboard() {
  const { data, loading } = useDashboardApi();
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState(-1);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection * -1);
    } else {
      setSortField(field);
      setSortDirection(1);
    }
  };
  const removeItem = (id) => {
    setFilteredData(filteredData.filter((product) => product.id !== id));
  };
  const filteredAndSortedData = useMemo(() => {
    const filtered = filteredData.filter((product) => {
      return product.name.toLowerCase().includes(searchText.toLowerCase()) || product.id.toString().includes(searchText);
    });

    if (sortField) {
      return filtered.sort((a, b) => {
        let aval = sortField === "name" ? a[sortField] : parseInt(a[sortField]);
        let bval = sortField === "name" ? b[sortField] : parseInt(b[sortField]);
        if (aval > bval) {
          return sortDirection;
        } else if (aval < bval) {
          return -sortDirection;
        } else return 0;
      });
    }
    return filtered;
  }, [filteredData, searchText, sortField, sortDirection]);
  return (
    <div>
      {loading && (
        <div className=" d-flex flex-row justify-content-center">
          <img src={loadingsvg} alt="loading" />
        </div>
      )}
      <Container>
        <input className="border my-2 p-2 w-100" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Search name or id" />
      </Container>
      <div className="overflow-x-auto">
        <Table className="" striped bordered hover>
          <thead>
            <tr>
              <th></th>
              <th onClick={() => handleSort("id")}>ID {<img alt="sort-icon" style={{ cursor: "pointer" }} src={sort} />}</th>
              <th onClick={() => handleSort("name")}>Name {<img alt="sort-icon" style={{ cursor: "pointer" }} src={sort} />}</th>
              <th onClick={() => handleSort("cost_price")}>Cost Price {<img alt="sort-icon" style={{ cursor: "pointer" }} src={sort} />}</th>
              <th onClick={() => handleSort("selling_price")}>Selling Price {<img alt="sort-icon" style={{ cursor: "pointer" }} src={sort} />}</th>
              <th>Description</th>
              <th>Allergen Info</th>
              <th>Usage Instructions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedData.map((product) => (
              <tr key={product.id}>
                <td>
                  <input type="checkbox" onClick={() => removeItem(product.id)} />
                </td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>₹{product.cost_price}</td>
                <td>₹{product.selling_price}</td>
                <td>{product.description}</td>
                <td>{product.allergen_info}</td>
                <td>{product.cooking_instruction}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default ProductDashboard;
