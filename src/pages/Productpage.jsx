import React from 'react'
import ProductFilter from '../components/ProductEvaluation'
import FilterPage from '../components/Productevaluation/Filterbystateandmarket'
import ProductInfoSection from '../components/Productevaluation/Productinfosection'
import MarketSegmentsTable from '../components/Productevaluation/Globalmarketsegment'
import MethodologySection from '../components/Productevaluation/Methodologysection'
import EvaluationPartners from '../components/Productevaluation/Evaluationpartner'
import StatisticalAnalysisSection from '../components/Productevaluation/Staticsanalysis'
import ProfileSection from '../components/Profilesection'
import ProductProfiles from '../components/Productevaluation/ProductProfiles'

const Productpage = () => {
    return (
        <div className=''>
            <ProfileSection bgImage="/handsseeds.png"
                name="Product Evaluation"
                breadcrumbs={['Home', 'Product Evaluation']} />

            <ProductInfoSection />
            <MarketSegmentsTable />
            <MethodologySection />
            <EvaluationPartners />
            <StatisticalAnalysisSection />
            <ProductFilter />
            <FilterPage />
            <ProductProfiles />     
        </div>
    )
}
export default Productpage
