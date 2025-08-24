import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Badge,
} from "@mui/material";
import { Add, Remove, ShoppingCart, FilterList } from "@mui/icons-material";

import { useProductStore } from "../store/productStore";
import { useCartStore } from "../store/cartStore";
import { useNavigate } from "react-router";

const Products: React.FC = () => {
  // const { products, loadProducts, getProductsByCategory, sortProducts } =useProductStore();
  const { products, getProductsByCategory } = useProductStore();
  const { items, addToCart, updateQuantity, removeFromCart } = useCartStore();
  const navigate = useNavigate();

  // TODO: Students should get data from Zustand store
  const [category, setCategory] = React.useState("all");

  // TODO: Students should get cart from store
  const mockCart = items;
  console.log("🚀 ~ Products ~ mockCart:", mockCart);

  // TODO: Students should implement filtering and sorting
  // const filteredProducts = [] as any[];
  const filteredProducts = products.filter((product) => {
    if (category === "electronics") return product.category === "electronics";
    if (category === "clothing") return product.category === "clothing";
    if (category === "books") return product.category === "books";
    if (category === "home") return product.category === "home";
    return true;
  });

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h4" component="h1">
          Products
        </Typography>
        <Badge badgeContent={mockCart.length} color="primary">
          <Button
            variant="outlined"
            startIcon={<ShoppingCart />}
            onClick={() => {
              // TODO: Students should implement navigation to cart
              navigate("/cart");
            }}
          >
            View Cart
          </Button>
        </Badge>
      </Box>

      {/* Filters */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <FilterList />

          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel>Category</InputLabel>
            <Select
              value={category}
              label="Category"
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value="all">All Categories</MenuItem>
              <MenuItem value="electronics">Electronics</MenuItem>
              <MenuItem value="clothing">Clothing</MenuItem>
              <MenuItem value="books">Books</MenuItem>
              <MenuItem value="home">Home & Garden</MenuItem>
            </Select>
          </FormControl>

          <Typography variant="body2" color="text.secondary">
            {filteredProducts.length} products
          </Typography>
        </Box>
      </Paper>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <Paper sx={{ p: 4, textAlign: "center" }}>
          <Typography variant="h6" color="text.secondary">
            No products found
          </Typography>
        </Paper>
      ) : (
        <Grid container spacing={3}>
          {filteredProducts.map((product: any, index: number) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image || "/api/placeholder/300/200"}
                  alt={product.name}
                  sx={{ objectFit: "cover" }}
                />

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {product.name}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {product.description}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Typography variant="h5" color="primary">
                      ฿{product.price?.toLocaleString()}
                    </Typography>
                    <Chip
                      label={product.category}
                      size="small"
                      variant="outlined"
                    />
                  </Box>

                  {/* Add to Cart Section */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {/* TODO: Students should check if item is in cart */}
                    {mockCart.find((x) => x.product?.id == product.id) !=
                    undefined ? (
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          width: "100%",
                        }}
                      >
                        <Button
                          size="small"
                          onClick={() => {
                            // TODO: Students should implement decrease quantity
                            updateQuantity(
                              product.id,
                              (mockCart.find((x) => x.product?.id == product.id)
                                ?.quantity || 0) - 1
                            );
                          }}
                        >
                          <Remove />
                        </Button>

                        <Typography variant="body1" sx={{ mx: 1 }}>
                          {/* quantity in cart */}
                          {
                            mockCart.find((x) => x.product?.id == product.id)
                              ?.quantity
                          }
                        </Typography>

                        <Button
                          size="small"
                          onClick={() => {
                            // TODO: Students should implement increase quantity
                            updateQuantity(
                              product.id,
                              (mockCart.find((x) => x.product?.id == product.id)
                                ?.quantity || 0) + 1
                            );
                          }}
                        >
                          <Add />
                        </Button>

                        <Button
                          variant="outlined"
                          color="error"
                          size="small"
                          sx={{ ml: "auto" }}
                          onClick={() => {
                            // TODO: Students should implement remove from cart
                            removeFromCart(product.id);
                          }}
                        >
                          Remove
                        </Button>
                      </Box>
                    ) : (
                      <Button
                        variant="contained"
                        fullWidth
                        startIcon={<ShoppingCart />}
                        onClick={() => {
                          // TODO: Students should implement add to cart
                          addToCart(product);
                        }}
                      >
                        Add to Cart
                      </Button>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Products;
