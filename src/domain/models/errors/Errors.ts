/**
 * 	Represents a Local Storage Error
 * 	@extends Error
 */
export class LocalStorageError extends Error {
	/**
	 * 	Creates a LocalStorageError
	 *	@param msg - Message to show in the error
	 */
	constructor(msg: string) {
		super(msg);
		// Set the prototype explicitly.
		Object.setPrototypeOf(this, LocalStorageError.prototype);
	}
}