import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  Rating,
  Tooltip,
  Button,
  Container,
} from "@mui/material";

import {
  amrakhandData,
  shrikhandData,
  kesarShrikhandData,
  pedheData,
  basundiData,
  tupData,
  paneerData,
  milkData,
  ambaBarfiData,
  dahiBoxData,
  sumadhurMilkData,
} from "../Data/dairyProductsData";

import CategorySection from "../components/CategorySection";
import ProductCard from "../components/ProductCard";
import shrikhandIcon from "../assets/shrikhand.png";
import amrkhandIcon from "../assets/amrkhand.png";
import kesarIcon from "../assets/shrikhand.png";
import basundiIcon from "../assets/Basundi.png";
import pedaIcon from "../assets/Basundi.png";
import gheeIcon from "../assets/ghee.png";
import paneerIcon from "../assets/paneer.png";
import milkIcon from "../assets/yalgud milk.png";
import mangobarfiicon from "../assets/mango barfi.png";
import adImage from "../assets/tak.png"; // Example ad image
import profilePic from "../assets/profilePicture.jpg";
import Carousel from "react-material-ui-carousel";

const testimonials = [
  {
    name: "Rajesh Kogekar",
    location: "Gouri General Store, Kagal",
    feedback:
      "स्वस्त दरात चांगले उत्पाद आहे. नवीन त्यात उपलब्ध करून देत आहेत त्यामुळे खरेदीसाठी वापरायला योग्य आहे.",
    rating: 5,
    image: profilePic,
  },
  {
    name: "Sunita Patil",
    location: "Shree Mart, Ichalkaranji",
    feedback:
      "सेवा उत्कृष्ट आहे. वेळेवर डिलिव्हरी आणि उत्पादनांची गुणवत्ता अप्रतिम.",
    rating: 4,
    image: profilePic,
  },
  {
    name: "Ravi Pawar",
    location: "Ravi Traders, Jaysingpur",
    feedback: "ग्राहक सेवा खूप चांगली आहे. उत्पादन नेहमीच वेळेवर मिळते.",
    rating: 5,
    image: profilePic,
  },
  {
    name: "Sneha Jadhav",
    location: "Sneha Super Store, Sangli",
    feedback: "विश्वासार्ह आणि दर्जेदार सेवा. हमखास शिफारस करेन!",
    rating: 5,
    image: profilePic,
  },
];
export default function ProductsGrid() {
  return (
    <>
      <Grid container spacing={1} border={"3px solid blue"} width={"100%"}>
        <Grid size={{ xs: 12, md: 9 }} sx={{ p: 1, border: "2px solid red" }}>
          <Grid
            container
            spacing={1}
            border={"3px solid green"}
            // width={"100%"}
            // height={"85vh"}
          >
            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{ border: "4px solid pink", p: 2 }}
            >
              {/* Title */}
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  bgcolor: "#2196f3",
                  color: "#fff",
                  // width: "418px",
                  // height: "29px",
                  borderRadius: 1,
                  mb: 1,
                }}
              >
                Shrikhand / श्रीखंड
              </Typography>

              {/* Container label + icon */}
              <Grid
                container
                // justifyContent="space-between"
                alignItems="center"
                sx={{ mb: 1 }}
              >
                <Grid>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      bgcolor: "#42a5f5",
                      color: "#fff",
                      width: "109px",
                      height: "28px",
                      borderRadius: "8px",
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Container
                  </Typography>
                </Grid>
                <Grid>
                  <Box
                    component="img"
                    src={shrikhandIcon}
                    alt="Shrikhand Icon"
                    sx={{ width: 40, height: 40, borderRadius: "50%" }}
                  />
                </Grid>
              </Grid>

              {/* Cards Grid */}
              <Grid container spacing={2}>
                {shrikhandData.map((item) => (
                  <Grid size={{ xs: 12, md: 4 }} key={item.id}>
                    <ProductCard item={item} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{ border: "4px solid pink", p: 2 }}
            >
              {/* Title */}
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  bgcolor: "#2196f3",
                  color: "#fff",
                  // width: "418px",
                  // height: "29px",
                  borderRadius: 1,
                  mb: 1,
                }}
              >
                Amrakhand /आम्रखंड
              </Typography>

              {/* Container label + icon */}
              <Grid
                container
                // justifyContent="space-between"
                alignItems="center"
                sx={{ mb: 1 }}
              >
                <Grid item>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      bgcolor: "#42a5f5",
                      color: "#fff",
                      width: "109px",
                      height: "28px",
                      borderRadius: "8px",
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Container
                  </Typography>
                </Grid>
                <Grid item>
                  <Box
                    component="img"
                    src={amrkhandIcon}
                    alt="Amrkhand Icon"
                    sx={{ width: 40, height: 40, borderRadius: "50%" }}
                  />
                </Grid>
              </Grid>

              {/* Cards Grid */}
              <Grid container spacing={2}>
                {amrakhandData.map((item) => (
                  <Grid size={{ xs: 12, md: 4 }} key={item.id}>
                    <ProductCard item={item} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{ border: "4px solid pink", p: 2 }}
            >
              {/* Title */}
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  bgcolor: "#2196f3",
                  color: "#fff",
                  // width: "418px",
                  // height: "29px",
                  borderRadius: 1,
                  mb: 1,
                }}
              >
                Shrikhand / श्रीखंड
              </Typography>

              {/* Container label + icon */}
              <Grid
                container
                // justifyContent="space-between"
                alignItems="center"
                sx={{ mb: 1 }}
              >
                <Grid>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      bgcolor: "#42a5f5",
                      color: "#fff",
                      width: "109px",
                      height: "28px",
                      borderRadius: "8px",
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Poly Pack
                  </Typography>
                </Grid>
                <Grid>
                  <Box
                    component="img"
                    src={shrikhandIcon}
                    alt="Shrikhand Icon"
                    sx={{ width: 40, height: 40, borderRadius: "50%" }}
                  />
                </Grid>
              </Grid>

              {/* Cards Grid */}
              <Grid container spacing={2}>
                {shrikhandData.map((item) => (
                  <Grid size={{ xs: 12, md: 4 }} key={item.id}>
                    <ProductCard item={item} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{ border: "4px solid pink", p: 2 }}
            >
              {/* Title */}
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  bgcolor: "#2196f3",
                  color: "#fff",
                  // width: "418px",
                  // height: "29px",
                  borderRadius: 1,
                  mb: 1,
                }}
              >
                Amrakhand /आम्रखंड
              </Typography>

              {/* Container label + icon */}
              <Grid
                container
                // justifyContent="space-between"
                alignItems="center"
                sx={{ mb: 1 }}
              >
                <Grid item>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      bgcolor: "#42a5f5",
                      color: "#fff",
                      width: "109px",
                      height: "28px",
                      borderRadius: "8px",
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Poly Pack
                  </Typography>
                </Grid>
                <Grid item>
                  <Box
                    component="img"
                    src={amrkhandIcon}
                    alt="Amrkhand Icon"
                    sx={{ width: 40, height: 40, borderRadius: "50%" }}
                  />
                </Grid>
              </Grid>

              {/* Cards Grid */}
              <Grid container spacing={2}>
                {amrakhandData.map((item) => (
                  <Grid size={{ xs: 12, md: 4 }} key={item.id}>
                    <ProductCard item={item} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Box sx={{  bgcolor: "#f9f9f9" }}>
              <Container maxWidth="xl">
                <Grid container spacing={2}>
                  {/* Kesar Shrikhand */}
                  <Grid size={{ xs: 12, md: 4 }}>
                    <Box
                      sx={{ p: 2, border: "4px solid pink", borderRadius: 2 }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          textAlign: "center",
                          bgcolor: "#2196f3",
                          color: "#fff",
                          borderRadius: 1,
                          p: 1,
                          mb: 2,
                        }}
                      >
                        Kesar Shrikhand / केसर श्रीखंड
                      </Typography>

                      <Grid
                        container
                        alignItems="center"
                        sx={{ mb: 2 }}
                        spacing={1}
                      >
                        <Grid item>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              bgcolor: "#42a5f5",
                              color: "#fff",
                              px: 2,
                              py: 0.5,
                              borderRadius: "8px",
                              fontWeight: "bold",
                              display: "inline-block",
                            }}
                          >
                            Poly pack
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Box
                            component="img"
                            src={kesarIcon}
                            alt="Kesar Icon"
                            sx={{ width: 40, height: 40, borderRadius: "50%" }}
                          />
                        </Grid>
                      </Grid>

                      <Grid container spacing={2}>
                        {kesarShrikhandData.map((item) => (
                          <Grid size={{ xs: 12, md: 6 }} key={item.id}>
                            <ProductCard item={item} />
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 12, md: 4 }}>
                    <Box
                      sx={{ p: 2, border: "4px solid pink", borderRadius: 2 }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          textAlign: "center",
                          bgcolor: "#2196f3",
                          color: "#fff",
                          borderRadius: 1,
                          p: 1,
                          mb: 2,
                        }}
                      >
 Basundi / बासुंदी                      
 </Typography>

                      <Grid
                        container
                        alignItems="center"
                        sx={{ mb: 2 }}
                        spacing={1}
                      >
                        <Grid item>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              bgcolor: "#42a5f5",
                              color: "#fff",
                              px: 2,
                              py: 0.5,
                              borderRadius: "8px",
                              fontWeight: "bold",
                              display: "inline-block",
                            }}
                          >
                            Poly pack
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Box
                            
                    component="img"
                    src={basundiIcon}
                    alt="Basundi Icon"
                            sx={{ width: 40, height: 40, borderRadius: "50%" }}
                          />
                        </Grid>
                      </Grid>

                      <Grid container spacing={2}>
                        {basundiData.map((item) => (
                          <Grid size={{ xs: 12, md: 6 }} key={item.id}>
                            <ProductCard item={item} />
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 12, md: 4 }}>
                    <Box
                      sx={{ p: 2, border: "4px solid pink", borderRadius: 2 }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          textAlign: "center",
                          bgcolor: "#2196f3",
                          color: "#fff",
                          borderRadius: 1,
                          p: 1,
                          mb: 2,
                        }}
                      >
Pedhe / पेढे                     
 </Typography>

                      <Grid
                        container
                        alignItems="center"
                        sx={{ mb: 2 }}
                        spacing={1}
                      >
                        <Grid item>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              bgcolor: "#42a5f5",
                              color: "#fff",
                              px: 2,
                              py: 0.5,
                              borderRadius: "8px",
                              fontWeight: "bold",
                              display: "inline-block",
                            }}
                          >
                            Poly pack
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Box
                    component="img"
                    src={pedaIcon}
                    alt="Peda Icon"
                            sx={{ width: 40, height: 40, borderRadius: "50%" }}
                          />
                        </Grid>
                      </Grid>

                      <Grid container spacing={2}>
                        {pedheData.map((item) => (
                          <Grid size={{ xs: 12, md: 6 }} key={item.id}>
                            <ProductCard item={item} />
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
              </Container>
            </Box>
            <Box sx={{ bgcolor: "#f9f9f9" }}>
              <Container maxWidth="xl">
                <Grid container spacing={2}>
                  {/* Kesar Shrikhand */}
                  <Grid size={{ xs: 12, md: 4 }}>
                    <Box
                      sx={{ p: 2, border: "4px solid pink", borderRadius: 2 }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          textAlign: "center",
                          bgcolor: "#2196f3",
                          color: "#fff",
                          borderRadius: 1,
                          p: 1,
                          mb: 2,
                        }}
                      >
Tup /तूप                      </Typography>

                      <Grid
                        container
                        alignItems="center"
                        sx={{ mb: 2 }}
                        spacing={1}
                      >
                        <Grid item>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              bgcolor: "#42a5f5",
                              color: "#fff",
                              px: 2,
                              py: 0.5,
                              borderRadius: "8px",
                              fontWeight: "bold",
                              display: "inline-block",
                            }}
                          >
                            Poly pack
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Box
              component="img"
              src={gheeIcon}
              alt="Tup Icon"
                            sx={{ width: 40, height: 40, borderRadius: "50%" }}
                          />
                        </Grid>
                      </Grid>

                      <Grid container spacing={2}>
                        {tupData.map((item) => (
                          <Grid size={{ xs: 12, md: 6 }} key={item.id}>
                            <ProductCard item={item} />
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 12, md: 4 }}>
                    <Box
                      sx={{ p: 2, border: "4px solid pink", borderRadius: 2 }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          textAlign: "center",
                          bgcolor: "#2196f3",
                          color: "#fff",
                          borderRadius: 1,
                          p: 1,
                          mb: 2,
                        }}
                      >
  Paneer /पनीर                      </Typography>

                      <Grid
                        container
                        alignItems="center"
                        sx={{ mb: 2 }}
                        spacing={1}
                      >
                        <Grid item>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              bgcolor: "#42a5f5",
                              color: "#fff",
                              px: 2,
                              py: 0.5,
                              borderRadius: "8px",
                              fontWeight: "bold",
                              display: "inline-block",
                            }}
                          >
                            Poly pack
                          </Typography>
                        </Grid>
                        <Grid item>
                           <Box
              component="img"
              src={paneerIcon}
              alt="paneer Icon"
                            sx={{ width: 40, height: 40, borderRadius: "50%" }}
                          />
                        </Grid>
                      </Grid>

                      <Grid container spacing={2}>
                        {paneerData.map((item) => (
                          <Grid size={{ xs: 12, md: 6 }} key={item.id}>
                            <ProductCard item={item} />
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  </Grid>
                  
                  <Grid size={{ xs: 12, md: 4 }}>
                    <Box
                      sx={{ p: 2, border: "4px solid pink", borderRadius: 2 }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          textAlign: "center",
                          bgcolor: "#2196f3",
                          color: "#fff",
                          borderRadius: 1,
                          p: 1,
                          mb: 2,
                        }}
                      >
Yalgud Milk /यळगुड दूध                      </Typography>

                      <Grid
                        container
                        alignItems="center"
                        sx={{ mb: 2 }}
                        spacing={1}
                      >
                        <Grid item>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              bgcolor: "#42a5f5",
                              color: "#fff",
                              px: 2,
                              py: 0.5,
                              borderRadius: "8px",
                              fontWeight: "bold",
                              display: "inline-block",
                            }}
                          >
                            Poly pack
                          </Typography>
                        </Grid>
                        <Grid item>
                           <Box
              component="img"
              src={milkIcon}
              alt="Yalgud milk Icon"
                            sx={{ width: 40, height: 40, borderRadius: "50%" }}
                          />
                        </Grid>
                      </Grid>

                      <Grid container spacing={2}>
                        {milkData.map((item) => (
                          <Grid size={{ xs: 12, md: 6 }} key={item.id}>
                            <ProductCard item={item} />
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  </Grid>
                  <Grid container spacing={2} sx={{ mt: 2 }}>
  {/* Amba Barfi */}
  <Grid item xs={12} md={4} >
    <Box sx={{ p: 2, border: "4px solid pink", borderRadius: 2, }}>
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          bgcolor: "#2196f3",
          color: "#fff",
          borderRadius: 1,
          p: 1,
          mb: 2,
        }}
      >
        Amba Barfi / आंबा बर्फी
      </Typography>

      <Grid container alignItems="center" spacing={1} sx={{ mb:2}}>
        <Grid item>
          <Typography
            variant="subtitle1"
            sx={{
              bgcolor: "#42a5f5",
              color: "#fff",
              px: 2,
              py: 0.5,
              borderRadius: "8px",
              fontWeight: "bold",
              display: "inline-block",
              
            }}
          >
            Poly pack
          </Typography>
        </Grid>
        <Grid item>
          <Box
            component="img"
            src={mangobarfiicon}
            alt="Amba Icon"
            sx={{ width: 40, height: 40, borderRadius: "50%" }}
          />
        </Grid>
      </Grid>

      <ProductCard item={ambaBarfiData[0]} />
    </Box>
  </Grid>

  {/* Dahi Box */}
  <Grid item xs={12} md={4}>
    <Box sx={{ p: 2, border: "4px solid pink", borderRadius: 2 }}>
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          bgcolor: "#2196f3",
          color: "#fff",
          borderRadius: 1,
          p: 1,
          mb: 2,
        }}
      >
        Dahi Box / दही बॉक्स
      </Typography>

      <Grid container alignItems="center" spacing={1} sx={{ mb: 2 }}>
        <Grid item>
          <Typography
            variant="subtitle1"
            sx={{
              bgcolor: "#42a5f5",
              color: "#fff",
              px: 2,
              py: 0.5,
              borderRadius: "8px",
              fontWeight: "bold",
              display: "inline-block",
            }}
          >
            Container
          </Typography>
        </Grid>
        <Grid item>
          <Box
            component="img"
            src={paneerIcon}
            alt="Dahi Icon"
            sx={{ width: 40, height: 40, borderRadius: "50%" }}
          />
        </Grid>
      </Grid>

      <ProductCard item={dahiBoxData[0]} />
    </Box>
  </Grid>

  {/* Sumadhur Milk */}
  <Grid item xs={12} md={4}>
    <Box sx={{ p: 2, border: "4px solid pink", borderRadius: 2 }}>
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          bgcolor: "#2196f3",
          color: "#fff",
          borderRadius: 1,
          p: 1,
          mb: 2,
        }}
      >
        Sumadhur Milk / सुमधुर दूध
      </Typography>

      <Grid container alignItems="center" spacing={1} sx={{ mb: 2 }}>
        <Grid item>
          <Typography
            variant="subtitle1"
            sx={{
              bgcolor: "#42a5f5",
              color: "#fff",
              px: 2,
              py: 0.5,
              borderRadius: "8px",
              fontWeight: "bold",
              display: "inline-block",
            }}
          >
            Poly pack
          </Typography>
        </Grid>
        <Grid item>
          <Box
            component="img"
            src={milkIcon}
            alt="Milk Icon"
            sx={{ width: 40, height: 40, borderRadius: "50%" }}
          />
        </Grid>
      </Grid>

      <ProductCard item={sumadhurMilkData[0]} />
    </Box>
  </Grid>
</Grid>

                </Grid>
              </Container>
            </Box>
          </Grid>
        </Grid>

        <Grid size={{ xs: 12, md: 3 }} sx={{ p: 1 }}>
          <Box
            component="img"
            src={adImage}
            alt="Advertisement"
            sx={{
              width: "100%",
              height: "auto", // You can use '100%' for fixed height fitting
              objectFit: "cover",
              borderRadius: 2,
              mb: 2,
            }}
          />
          <Carousel autoPlay interval={3000}>
            {testimonials.map((t, i) => (
              <Card key={i} sx={{ p: 2, borderRadius: 2, boxShadow: 2 }}>
                <Box display="flex" alignItems="center" mb={1}>
                  <Avatar src={t.image} sx={{ mr: 2 }} />
                  <Box>
                    <Typography fontWeight="bold">{t.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {t.location}
                    </Typography>
                  </Box>
                </Box>
                <Rating value={t.rating} readOnly size="small" />
                <Typography variant="body2" mt={1}>
                  “{t.feedback}”
                </Typography>
              </Card>
            ))}
          </Carousel>
        </Grid>
      </Grid>
     
    </>
  );
}
