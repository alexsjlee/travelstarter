<?php
/**
 * Created by PhpStorm.
 * User: davidsung
 * Date: 6/27/17
 * Time: 11:37 AM
 */

//load in mysql connect file
require('mysqlconnect.php');

//define a constant called "INTERNAL", set it to true
//const INTERNAL = true;
define('INTERNAL',true);

//make an output variable.  assume everything failed with the success property
$output = [
    'success' => false,
    'errors' => []
];
//check if action is specified in the query string
if(empty( $_GET['action'])) {
    $_GET['action'] = 'readItinerary';

//if not, assume we are reading itineraries, and set out action appropriately
} else {
//do a switch based on the action from the query string (or from the code above)
    switch ($_GET['action']) {
// if readItinerary, include the readItineraries.php file
        case 'readItinerary':
            include 'includes/readItineraries.php';
            break;
// if readItem, etc etc etc
        case 'readItem':
            include 'includes/readItems.php';
            break;
    }
}
//json encode the output
$encoded_output = json_encode($output);
//print the output
print($encoded_output);

//end