<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Products_model extends CI_Model {

	public function get($id = false)
	{

		if ($id == false)
		{

		$q = $this->db->get('products');
		$q = $q->result();

		}
		else
		{
			$this->db->where( 'id' , $id );
			$q = $this->db->get('products');
			$q = $q->row();
		}
		return $q;


	}

}

/* End of file product_model.php */
/* Location: ./application/models/product_model.php */