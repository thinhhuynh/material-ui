import * as React from 'react';
import Box from '@mui/joy/Box';
import Checkbox from '@mui/joy/Checkbox';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Typography from '@mui/joy/Typography';

export default function IconlessCheckbox() {
  return (
    <Box sx={{ width: 343 }}>
      <Typography id="topping" level="body2" fontWeight="lg" mb={2}>
        Pizza toppings
      </Typography>
      <Box role="group" aria-labelledby="topping">
        <List
          row
          sx={{
            '--List-gap': '0px',
            '--List-item-radius': '20px',
            flexWrap: 'wrap',
            gap: 1,
          }}
        >
          {[
            'Perpperoni',
            'Cheese',
            'Olives',
            'Tomatoes',
            'Fried Bacon',
            'Spinach',
          ].map((item, index) => (
            <ListItem key={item}>
              <Checkbox
                disabled={index === 0}
                overlay
                disableIcon
                variant="soft"
                label={item}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}
