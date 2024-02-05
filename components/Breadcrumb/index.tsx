import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useMediaQuery, useTheme } from '@mui/material';


function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function Breadcrumb() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const breadcrumbs = [
    <Link underline="hover" fontWeight={700} key="1" color="#252B42" href="/" onClick={handleClick}>
      Home
    </Link>,
    <Typography key="2" color="#BDBDBD" fontWeight={700}>
      Shop
    </Typography>,
  ];

  return (
    <Stack spacing={2} direction={isMobile ? 'row' : 'row'}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}