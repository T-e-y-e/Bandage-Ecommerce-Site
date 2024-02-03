import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import { Box, Typography} from "@mui/material";
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function SimpleBackdrop() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <button className='flex items-center gap-2' onClick={handleOpen}>
           <img src="/icons/cart-icon.png" alt="cart-icon" />
            <span className='text-[#23A6F0] bg-transparent text-sm font-bold'>1</span>
        </button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <Box
      sx={{
        position: "absolute",
        height: "100vh",
        width: "99.2vw",
        backgroundColor: "rgba(0,0,0,0.5)",
        top: 120,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          right: 400,
          top: 20,
          minHeight: "20vh",
          width: "20vw",
          backgroundColor: "white",
          color: "black",
          padding: "1.5rem",
          textTransform: "uppercase",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Cart</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Total</Typography>
          <Typography>$$$</Typography>
        </Box>
        <Button
        //   color="#d97d45"
          variant="contained"
          sx={{ width: "100%", marginTop: "1rem" }}
        >
          <Link href="/checkout">Checkout</Link>
        </Button>
      </Box>
    </Box>
      </Backdrop>
    </div>
  );
}
