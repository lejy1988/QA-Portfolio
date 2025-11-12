import { Code } from 'lucide-react';

const automationSamples = [
  {
    projectName: 'MKWATCHES - Product CRUD Test Suite',
    description: 'Automated Cypress test validating product creation, editing, and deletion functionality with database integrity checks.',
    code: `describe('Product CRUD Operations', () => {
  it('should create a new product successfully', () => {
    cy.visit('/admin/products');
    cy.get('[data-cy="add-product-btn"]').click();

    cy.get('#product-name').type('Luxury Watch');
    cy.get('#product-price').type('299.99');
    cy.get('#product-description').type('Premium timepiece');

    cy.get('[data-cy="submit-product"]').click();
    cy.contains('Product created successfully').should('be.visible');
    cy.get('[data-cy="product-list"]').should('contain', 'Luxury Watch');
  });

  it('should update product details', () => {
    cy.get('[data-cy="edit-product-btn"]').first().click();
    cy.get('#product-price').clear().type('349.99');
    cy.get('[data-cy="update-product"]').click();
    cy.contains('Product updated').should('be.visible');
  });
});`,
    outcome: 'Successfully validated CRUD operations with 100% pass rate across 15 test scenarios, catching 3 edge-case bugs before production.'
  },
  {
    projectName: 'Lemonade Stand - Game Logic Validation',
    description: 'Cypress test suite for game mechanics including weather effects, pricing logic, and demand calculations.',
    code: `describe('Game Mechanics', () => {
  it('should calculate profit based on weather and pricing', () => {
    cy.visit('/game');
    cy.get('[data-cy="start-game"]').click();

    cy.get('#price-input').clear().type('1.50');
    cy.get('#cups-to-make').clear().type('50');
    cy.get('[data-cy="start-day"]').click();

    cy.get('[data-cy="day-result"]').should('be.visible');
    cy.get('[data-cy="cups-sold"]').invoke('text').then((text) => {
      const cupsSold = parseInt(text);
      expect(cupsSold).to.be.greaterThan(0);
      expect(cupsSold).to.be.lessThanOrEqual(50);
    });

    cy.get('[data-cy="total-profit"]').should('exist');
  });
});`,
    outcome: 'Identified and fixed 2 calculation errors in demand algorithm and ensured accurate profit tracking across all weather conditions.'
  }
];

export default function AutomationSamples() {
  return (
    <section className="py-20 px-4 bg-slate-50" id="automation">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center">
          Automation Samples
        </h2>
        <div className="space-y-8">
          {automationSamples.map((sample, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Code className="text-amber-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                      {sample.projectName}
                    </h3>
                    <p className="text-slate-700 mb-4">
                      {sample.description}
                    </p>
                  </div>
                </div>

                <div className="bg-slate-900 rounded-lg p-4 mb-4 overflow-x-auto">
                  <pre className="text-sm text-slate-100 font-mono">
                    <code>{sample.code}</code>
                  </pre>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                  <p className="text-sm font-semibold text-slate-900 mb-1">Outcome:</p>
                  <p className="text-slate-700">{sample.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
