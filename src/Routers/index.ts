import Apartment from '../components/Apartment/Apartment'
import Ssevice from '../components/service/Service'
import Contract from '../components/contract/Contract'
import FormCreatePersons from '../components/forms/persons/FormCreatePersons'
import Persons from '..//components/persons/Personts'
import FormContracts from '../components/forms/contract/FormContracts'
import ApartmentDetail from '../components/Apartment/ApartmentDetail'
import FormCreateNewBill from '../components/forms/service/FormCreateNewBill'
import DetailPersons from '../components/persons/DetailPersons'
const PublicRouters = [
  { path: '/', component: Apartment },
  { path: 'service', component: Ssevice },
  { path: 'contract', component: Contract },
  { path: '/resident', component: Persons },
  { path: 'create_persons', component: FormCreatePersons, layout: null },
  { path: 'edit_person/:id', component: FormCreatePersons, layout: null },
  { path: 'create_contract', component: FormContracts, layout: null },
  { path: '/apartment_detail/:id', component: ApartmentDetail },
  { path: '/create_new_bill', component: FormCreateNewBill, layout: null },
  { path: '/person_detail/:id', component: DetailPersons }
]
export default PublicRouters
