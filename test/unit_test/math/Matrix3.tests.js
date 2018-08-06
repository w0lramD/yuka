/**
 * @author Mugen87 / https://github.com/Mugen87
 * @author robp94 / https://github.com/robp94
 *
 */

const expect = require( 'chai' ).expect;
const YUKA = require( '../../../build/yuka.js' );

const Matrix3 = YUKA.Matrix3;

describe( 'Matrix3', function () {

	describe( '#identity()', function () {

		it( 'should transform the matrix to an identity matrix', function () {

			const matrix = new Matrix3();
			matrix.identity();

			expect( matrix.elements ).to.deep.equal( [ 1, 0, 0, 0, 1, 0, 0, 0, 1 ] );

		} );

	} );

	describe( '#equals()', function () {

		it( 'should return true if equal else false', function () {

        	const m1 = new Matrix3();
			const m2 = new Matrix3();

			expect( m1.equals( m2 ) ).to.be.equal( true );

		} );

	} );

	describe( '#set()', function () {

		it( 'should set values of matrix', function () {

        	const m1 = new Matrix3();
			m1.set( 0, 0, 0, 0, 0, 0, 0, 0, 0 );

			expect( m1 ).to.deep.equal( { elements: [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ] } );

		} );

	} );

	describe( '#copy()', function () {

		it( 'should return copy of matrix', function () {

        	const m1 = new Matrix3().set( 0, 1, 2, 3, 4, 5, 6, 7, 8 );
			const m2 = new Matrix3().copy( m1 );

			expect( m1 ).to.eql( m2 );

		} );

	} );

	describe( '#clone()', function () {

		it( 'should return clone of matrix', function () {

			const m1 = new Matrix3().set( 0, 1, 2, 3, 4, 5, 6, 7, 8 );
			const m2 = m1.clone();

			expect( m1 ).to.eql( m2 );

		} );

	} );

	describe( '#multiply()', function () {

		it( 'should return matrix multiplied with other matrix', function () {

        	const m1 = new Matrix3();
			const m2 = new Matrix3();
			m1.multiply( m2 );
			expect( m1 ).to.eql( m2 );

		} );

	} );

	describe( '#premultiply()', function () {

		it( 'should return other matrix multiplied with matrix', function () {

			const m1 = new Matrix3();
			const m2 = new Matrix3();
			m1.premultiply( m2 );
			expect( m1 ).to.eql( m2 );

		} );

	} );

	describe( '#multiplyMatrices()', function () {

		it( 'should return multiplied matrix of two matrices', function () {

			const m1 = new Matrix3();
			const m2 = new Matrix3();
			const m3 = new Matrix3().multiplyMatrices( m1, m2 );
			expect( m3 ).to.eql( m1 );

		} );

	} );

	describe( '#multiplyScalar()', function () {

		it( 'should return matrix multiplied by scalar', function () {

        	const m1 = new Matrix3().multiplyScalar( 1 );

			expect( m1 ).to.eql( new Matrix3() );

		} );

	} );

	describe( '#extractBasis()', function () {

		it( 'should put values of matrix in the three given vectors', function () {

        	const v0 = new YUKA.Vector3();
			const v1 = new YUKA.Vector3();
			const v2 = new YUKA.Vector3();
			const m1 = new Matrix3();

			m1.extractBasis( v0, v1, v2 );

			expect( v0 ).to.deep.equal( { x: 1, y: 0, z: 0 } );
			expect( v1 ).to.deep.equal( { x: 0, y: 1, z: 0 } );
			expect( v2 ).to.deep.equal( { x: 0, y: 0, z: 1 } );

		} );

	} );

	describe( '#makeBasis()', function () {

		it( 'should build matrix of three given vectors', function () {

			const v0 = new YUKA.Vector3( 1, 0, 0 );
			const v1 = new YUKA.Vector3( 0, 0, 0 );
			const v2 = new YUKA.Vector3( 0, 0, 0 );
			const m1 = new Matrix3().makeBasis( v0, v1, v2 );

			expect( m1 ).to.deep.equal( { elements: [ 1, 0, 0, 0, 0, 0, 0, 0, 0 ] } );

		} );

	} );

	describe( '#lookAt()', function () {

		it( 'spec name', function () {

        	const m1 = new Matrix3();
			const v0 = new YUKA.Vector3();
			const v1 = new YUKA.Vector3();
			const v2 = new YUKA.Vector3();
			m1.lookAt( v0, v1, v2 );
			expect( m1 ).to.deep.equal( { elements: [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ] } );

		} );

	} );

	describe( '#transpose()', function () {

		it( 'should transpose matrix', function () {

        	const m1 = new Matrix3().transpose();

			expect( m1 ).to.eql( new Matrix3() );

		} );

	} );

	describe( '#fromQuaternion()', function () {

		it( 'spec name', function () {

        	const q1 = new YUKA.Quaternion();
			const m1 = new Matrix3().fromQuaternion( q1 );

			expect( m1 ).to.eql( new Matrix3() );

		} );

	} );

	describe( '#fromArray()', function () {

		it( 'should fill matrix with values of array', function () {

        	const m1 = new Matrix3().fromArray( [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ] );

			expect( m1 ).to.deep.equal( { elements: [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ] } );

		} );

	} );

	describe( '#toArray()', function () {

		it( 'should return array of matrix values', function () {

        	const m1 = new Matrix3();

			expect( m1.toArray() ).to.eql( [ 1, 0, 0, 0, 1, 0, 0, 0, 1 ] );

		} );

	} );



} );
