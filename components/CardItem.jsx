"use client";

import { Box,Typography,Card,CardActions,CardContent,Chip } from "@mui/material";
import Link from "next/link";
import { typography } from "@/app/themeValue";
import TimeSincePost from "./TImeSincePost";

function CardItem({data}) {

 
  
  
    return  (
  <Box>

{/*
   <p>제목:{data.title}</p>
   <p>카테고리:{data.category}</p>
   <p>설명:{data.description}</p>
   <p>종류:{data.type}</p>
   <p>수익여부:{data.revenue}</p>
   <p>수익설명:{data.revenueDesc}</p>
   <p>판매 이유:{data.whysell}</p>
   <p>가격:{data.price}</p>
   <p>최소 가격:{data.minPrice}</p>
   */}



   <Card
              key={data._id}
              sx={{
                display: 'flex',
                bgcolor:'#191919',
                flexDirection: 'column',
                height: '200px',         
                width: '100%',
                margin: '0 auto',
                maxWidth: '100%',
                boxShadow:'none'
              }}
            >
           
              <CardContent sx={{ padding: '0' }}>
                <Box
                  sx={{
                    display: 'flex',    
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    border:'0px',
              
                  }}
                >
                 

                  <Box display="grid">

                    <Box mb={2}>
                      {data.category.map((cat,index) =>(
                         <Chip sx={{mr:'3px'}} key={index} size="small" variant="outlined" label={cat}/>
                      ))}
                    
                  
                    </Box>

                    <Box display="flex">
                      <Typography
                        variant="body1"
                        sx={{
                          alignContent: 'center',
                          maxWidth: '100px',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                    
                        <Typography>{data.user.name}</Typography>
                      </Typography>

                      <Typography
                        sx={{
                          color: 'rgb(168, 168, 168)',
                          ml: '4px',
                          textAlign: 'left',
                          alignContent: 'center',
                        }}
                      >
                 <TimeSincePost createdAt={data.createdAt} /> 
                      </Typography>
                    </Box>
                  
                  </Box>
                </Box>

                <Link href={`/product/${data._id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                  <Box sx={{ width: '234px', height: '74px' }}>
                    <Typography
                     
                      fontWeight={typography.weight.bold}
                      fontSize={typography.size.lg}
                      component="div"
                      sx={{
                        textAlign: 'left',
                        mt: '13px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {data.title}
                    </Typography>
                    <Typography
                      
                      fontSize={typography.size.md}
                      fontWeight={typography.weight.regular}
                      component="div"
                      sx={{
                        textAlign: 'left',
                        mt: '6px',
                        height: '45px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        lineHeight: '15px',
                        letterSpacing: '-4%',
                      }}
                    >
                     {data?.description}
                    </Typography>
                  </Box>
                </Link>
              </CardContent>
              <CardActions disableSpacing 
              sx={{ mt: 'auto', width:'auto',padding:0 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent:'space-between',
                    width:'100%',
                    borderTop:'1px solid',

  
                   }}>
                
                <Box sx={{ mt:'4px', p:1, flex:1, display:'grid',gap:2,textAlign:'center'}}>
                <Typography>종류</Typography>
                <Typography>{data.type.join(', ')}</Typography>

              
                </Box>

                <Box sx={{mt:'4px', p:1,flex:1, display:'grid', gap:2, textAlign:'center'}}>
                <Typography>판매 가격</Typography>
                  <Typography>{data.price? data.price + "원" : "합의 가능"}</Typography>
             
                </Box>

                <Box sx={{mt:'4px',p:1,flex:1, display:'grid',gap:2,textAlign:'center'}}>
                <Typography>수익</Typography>
                  <Typography>{data.revenue}</Typography>
                 
                </Box>
              
                </Box>
              </CardActions>
            </Card>

  
  </Box>
    
  )}
  
  export default CardItem;
  