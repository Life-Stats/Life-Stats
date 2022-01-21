const { createClient } = require('@supabase/supabase-js');

const client = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_KEY);

const parseData = ({ data, error }) => {
  if (error) throw error;
  return data;
};

module.exports = { client, parseData };
