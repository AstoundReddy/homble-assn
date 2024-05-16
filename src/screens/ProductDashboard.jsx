import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { useDashboardApi } from "../hooks/useDashboardApi";
import sort from "../assets/svgs/sort.svg";
import loadingsvg from "../assets/svgs/loading.svg";
function ProductDashboard() {
  const { data, loading } = useDashboardApi();
  const [sortField, setSortField] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [sortedData, setSortedData] = useState(data);
  const [searchResults, setSearchResults] = useState(data);
  useEffect(() => {
    setSortedData(data);
    setSearchResults(data);
  }, [data]);

  const requestSort = (field) => {
    console.log("sorted");
    let sorted = sortedData;
    let search = searchResults;
    if (sortField === field) {
      setSortedData(sorted.toReversed());
    } else {
      sorted.sort((a, b) => {
        const aValue = field === "name" ? a[field] : parseInt(a[field]);
        const bValue = field === "name" ? b[field] : parseInt(b[field]);
        if (aValue < bValue) return 1;
        if (aValue > bValue) return -1;
        return 0;
      });
      search.sort((a, b) => {
        const aValue = field === "name" ? a[field] : parseInt(a[field]);
        const bValue = field === "name" ? b[field] : parseInt(b[field]);
        if (aValue < bValue) return 1;
        if (aValue > bValue) return -1;
        return 0;
      });
      setSearchResults(search);
      setSortedData(sorted);
      setSortField(field);
    }
  };
  const removeItem = (id) => {
    setSortedData(sortedData.filter((product) => product.id !== id));
  };
  useEffect(() => {
    console.log("new search results");
    const results = sortedData.filter((product) => product.name.toLowerCase().includes(searchText.toLowerCase()) || product.id.toString().includes(searchText));
    setSearchResults(results);
  }, [searchText, sortedData]);
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
              <th onClick={() => requestSort("id")}>ID {<img alt="sort-icon" style={{ cursor: "pointer" }} src={sort} />}</th>
              <th onClick={() => requestSort("name")}>Name {<img alt="sort-icon" style={{ cursor: "pointer" }} src={sort} />}</th>
              <th onClick={() => requestSort("cost_price")}>Cost Price {<img alt="sort-icon" style={{ cursor: "pointer" }} src={sort} />}</th>
              <th onClick={() => requestSort("selling_price")}>Selling Price {<img alt="sort-icon" style={{ cursor: "pointer" }} src={sort} />}</th>
              <th>Description</th>
              <th>Allergen Info</th>
              <th>Usage Instructions</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((product) => (
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
